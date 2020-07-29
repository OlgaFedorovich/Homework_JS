//1. Дана строка 'aaa@bbb@ccc'.  Замените все @ на !с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g,'!'));

//2. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в 31/12/2025.

let date = '2025-12-31',
    dateNew = date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1');
    console.timeLog(dateNew);

//3. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и 'javascript' тремя разными способами (через substr, substring, slice).

let string = 'я учу javascript!';

console.log(string.substring(2,5), string.substring(6,16));
console.log(string.substr(2,3), string.substr(6,10));
console.log(string.slice(2,5), string.slice(6,16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for(i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

console.log('Квадратный корень суммы кубов = ', Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

function calc(a, b) {
    let c = Math.abs(a - b);
    console.log(c);
}

calc(3, 5);
calc(6, 1);

/*6. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

let dateNow = new Date();

function changeDateFormat(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    let year = String(d.getFullYear());
    let hours = String(d.getHours());
    let min = String(d.getMinutes());
    let sec = String(d.getSeconds());
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (min.length < 2) min = '0' + min;
    if (sec.length < 2) sec = '0' + sec;
  
    console.log('Время и дата: ' + hours + ':' + min + ':' + sec + ' ' + day +'.' + month + '.' + year);
  }

  changeDateFormat(dateNow);

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/
let string1 = 'aa aba abba abbba abca abea',
    regexp = /ab+a/g;

console.log(string1.match(regexp));


/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого номера с кодом и без него. Функция должна возвращать true или false.*/

function strictPhoneCheck (number) {
    let regphone = /\+375-[0-9]{2}-[0-9]{7}$/;
    return regphone.test(number);
}

console.log(strictPhoneCheck('+375-29-5076863'));

function simplePhoneCheck (number) {
    let regphone2 = /^[0-9]{7,12}$/;
    return regphone2.test(number);
}

console.log(simplePhoneCheck('5076863'));

/*9. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3, получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/
//НЕ ПОЛУЧИЛОСЬ ВЫВЕСТИ ПАРАМЕТРЫ

function divideWebAddress (web) {
    console.log('Адрес доменного имени: ', web.match(/https:[/]{2}[0-9a-z.]*.[a-z]/)[0]);
    console.log('Часть адреса без параметров: ',web.match(/\/[0-9a-z-/]+\//)[0]);
    console.log('Хэш: ', web.match(/\#[0-9a-z]+/)[0]);
}

divideWebAddress('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

/*10. Напишите ф-цию удаления повторов из строки, в т.ч. повторных пробелов (2х и более) и спецсимволов, например: hello hello hello hello world» -> hello world». Функция должна возвращать обработанную строку.*/

let str1 = 'hello beautiful world hello  world hello hello world';

function removeCopies(str) {
    str = str.split(' ');
    let result = [];
    for(let i = 0; i < str.length ; i++) {
      if(result.indexOf(str[i]) == -1) result.push(str[i]);
  }
return result = result.join(" ");
}

console.log(removeCopies(str1));
