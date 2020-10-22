const data = JSON.parse(localStorage.getItem('data')) || [];

class Nav {

    create() {
        this.element = document.createElement('nav');
        this.element.classList.add('nav');

        // let listHTML = '';
        // data.forEach(function(page) {
        //     listHTML += `<li><a href="/#${page.slug}">${page.shortTitle}</a></li>`;
        // });
    
        let listHTML = `
            <li><a href="#general">general</a></li>
            <li><a href="#business">business</a></li>
            <li><a href="#entertainment">entertainment</a></li>
            <li><a href="#health">health</a></li>
            <li><a href="#science">science</a></li>
            <li><a href="#sports">sports</a></li>
            <li><a href="#technology">technology</a></li>
        `;
        
        if(listHTML.length > 0) {
            this.element.innerHTML = `<ul>${listHTML}</ul>`;
        }
    }

    init() {
        this.create();

        return this.element;
    }
}
const nav = new Nav().init();

export {nav};