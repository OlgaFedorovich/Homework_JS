const authInfo = {
    login: 'admin',
    password: 'nimda'
};

const getCookie = function(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

const auth = function( ) {
    let form = this.closest('.form'),
        inputLogin = form.querySelector('input[name="login"]').value,
        inputPassword = form.querySelector('input[name="password"]').value;
    if(inputLogin === authInfo.login && inputPassword === authInfo.password) {
        document.cookie = 'auth=true';
        document.cookie = 'authLogin=' + inputLogin;
        window.location = '/index2.html';
    } else { alert('Password or Login is invalid!');}
}

const logout = function() {
    if (!getCookie('auth') || !getCookie('authLogin')) return;
    document.cookie = 'auth=; max-age=-1';
    document.cookie = 'authLogin=; max-age=-1';
    window.location.reload();
};

if(window.location.pathname == '/index.html' && getCookie('auth') === 'true') window.location = '/index2.html';
if(window.location.pathname == '/index2.html' && !getCookie('auth')) window.location = '/index.html';

let buttonSignIn = document.querySelector('.sign-in'),
    buttonLogOut = document.querySelector('.log-out');      
if(buttonSignIn) buttonSignIn.addEventListener('click', auth);
if(buttonLogOut) buttonLogOut.addEventListener('click', logout);

let contactsData = [];

const contactsUpdate = function() {

    let localContactsData = localStorage.getItem('contactsData');
    if (localContactsData.length > 0) contactsData = JSON.parse(localContactsData);

    let contactsList = document.querySelector('.contacts_list ul');
    contactsList.innerHTML = "";
    contactsData.forEach(function(contact, id) {
        let elemContact = document.createElement('li');
        elemContact.innerHTML = `
        <div class="id">${id + 1}</div>
        <div class="name">${contact.name} </div>
        <div class="phone">${contact.phone}</div>`;
        contactsList.appendChild(elemContact);
    });
};

const addContact = function() {
    let form = this.closest('.form-add'),
    inputName = form.querySelector('input[name="name"]').value,
    inputPhone = form.querySelector('input[name="phone"]').value;

    if(inputName.length === 0 || inputPhone.length === 0 || inputPhone === " " || inputName === " ") return;

    let contact = {
        name: inputName,
        phone: inputPhone
    };

    contactsData.push(contact);

    localStorage.setItem('contactsData', JSON.stringify(contactsData));

    contactsUpdate();

    sessionStorage.removeItem('contactInputName');
    sessionStorage.removeItem('contactInputPhone');
};

const saveContact = function() {
    let form = this.closest('.form-add'),
        inputName = form.querySelector('input[name="name"]').value,
        inputPhone = form.querySelector('input[name="phone"]').value;

    if(inputName.length === 0 || inputPhone.length === 0 || inputPhone === " " || inputName === " ") return;

    sessionStorage.setItem('contactInputName', inputName);
    sessionStorage.setItem('contactInputPhone', inputPhone);

};

let buttonAdd = document.querySelector('.add'),
    buttonSave = document.querySelector('.save');
if(buttonAdd) buttonAdd.addEventListener('click', addContact);
if(buttonSave) buttonSave.addEventListener('click', saveContact);

if(window.location.pathname == '/index2.html'); 
{   contactsUpdate(); 
    let contactInputName = sessionStorage.getItem('contactInputName');
    let contactInputPhone = sessionStorage.getItem('contactInputPhone');

    if(contactInputName && contactInputName.length > 0 && contactInputPhone && contactInputPhone.length > 0) {
        let form = document.querySelector('.form-add'),
            inputName = form.querySelector('input[name="name"]'),
            inputPhone = form.querySelector('input[name="phone"]');

            inputName.value = contactInputName;
            inputPhone.value = contactInputPhone;
    }
}