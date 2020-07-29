//Домашняя работа 5 Часть 2

/*1. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017*
* Иванов Иван Иванович       *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке. Рамку
вывести в консоль. */

function createFrame(a, b, c) {

    let arrayLength = [a.length, b.length, c.length];
    console.log(arrayLength);
    console.log(arrayLength.sort(function(d, f) {
        return (d - f);
    }));
    let maxLength = arrayLength[arrayLength.length - 1];
    console.log(maxLength);

    let drawStars = function() {
        let str = '';
        for(let i = 1; i <= maxLength + 2; i++) {str += '*';}
        console.log(str);
    };
    
    let drawTextLines = function(str) {
            let string = '*' + str;
            if(str.length == maxLength) console.log(string + '*');
            else {
                for(let j = 1; j <= maxLength - str.length; j++) {
                    string += ' ';
                }
                console.log(string + '*');
            }
    };

    drawStars();
    drawTextLines(a);
    drawTextLines(b);
    drawTextLines(c);
    drawStars();
}

createFrame('Домашняя работа: «Функции»', 'Выполнил; студент гр. ' + prompt('Введите номер группы'), prompt('Введите ФИО'));


/*2. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

     *
    ***
   *****
  *******
 *********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
которая выведет перевернутый треугольник. */

function paintTriangle(height) {
    
    let str = '';

    for(let i = 1; i <= height; i++) {
        str = '';

        for(let j = 1; j <= height-i; j++) str += ' ';

        for(let j = 1; j <= i+i-1; j++) str += '*';

        console.log(str);
    }

}

paintTriangle(10);

function turnTriangleDown(height) {

    let str = '';

    for(let i = height; i >= 1; i--) {
        str = '';
        
        for(let j = 1; j <= height-i; j++) str += ' ';

        for(let j = 1; j <= i+i-1; j++) str += '*';
        console.log(str);
    }
}

turnTriangleDown(10);

/*3. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты.
Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной
«собачки», знака подчеркивания, дефиса и точки, причем они не могут быть
первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или
«@@», «_@», «@-», «--» и т.п.

b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя
может содержать только буквы, цифры, но не быть первыми и единственными в
имени, и точку;

c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не
может быть длиной менее 2 и более 11 символов. */

function validate(mail) {
    let error = false,
        validCharachters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'x', 'w', 'q', 'v', 'z', 'y', '@', '_', '-', '.'],
        validNameCharachters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'x', 'w', 'q', 'v', 'z', 'y','.'];

//a часть        
        for(let i = 0; i < mail.length; i++ ) {
            
            if(validCharachters.indexOf(mail[i]) == -1) error = true;
            if(mail[i] == '.' && (mail[i-1] == '.' || mail[i+1] == '.')) error = true;
            if(mail[i] == '@' && ((mail[i-1] == '.' || mail[i+1] == '.') || (mail[i-1] == '@' || mail[i+1] == '@') || (mail[i-1] == '_' || mail[i+1] == '_') || (mail[i-1] == '-' || mail[i+1] == '-'))) error = true;
            if(mail[i] == '-' && (mail[i-1] == '-' || mail[i+1] == '-')) error = true;
            if(mail[0] == '_' || mail[0] == '-' || mail[0] == '.' || mail[0] == '@' || mail[mail.length - 1] == '_' || mail[mail.length - 1] == '-' || mail[mail.length - 1] == '.' || mail[mail.length - 1] == '@' ) error = true;
        }

//b часть 
        let name = mail.slice(0, mail.indexOf('@'));
        if (mail.indexOf('@') != mail.lastIndexOf('@')) error = true;
        if(name.length <= 2) error = true;
        for(let j = 0; j < name.length; j++) {
            if(validNameCharachters.indexOf(name[j]) == -1) error = true;
        }

//c часть 

        let domain = mail.slice(mail.lastIndexOf('.') + 1, mail.length);
        if (domain.length < 2 || domain.length > 11) error = true;


        return error ? 'Email false' : 'Email is Valid';
}

console.log(validate('yellow@gmail.com'));



