//Первая часть ДЗ

//Задание_1

let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Город проживания?'),
    phone = prompt('Номер Вашего телефона?'),
    email = prompt('Ваш email?'),
    company = prompt('Название компании, в которой Вы работаете?');
document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.  Мои контактные данные: ' + phone + ', ' + email + '. ');

//Задание_2 

let yearOfBirth = 2020 - age;
document.write(' ' + name + ' родился(лась) в ' + yearOfBirth + ' году ');

//Задание_3 Строка из 6 чисел, проверить, равны ли суммы первых трех и последних трех цифр

let Strg = '436193';
( +Strg[0] + +Strg[1] + +Strg[2] == +Strg[3] + +Strg[4] + +Strg[5]) ? console.log('Да') : console.log('Нет');

//Задание_4 Проверить работу скрипта при a, равном 1, 0, -3.
let A = -3;
if (A > 0) {
    console.log('Верно');
} else { 
    console.log('Неверно');
}

//Задание_5

let a1 = 10,
    b1 = 2;

console.log(a1 + b1, a1 - b1, a1 * b1, a1 / b1);

if ((a1 + b1) > 1) {
    console.log((a1 + b1) * (a1 + b1));
}

//Задание_6 

((a1 > 2 && a1 < 11) || (b1 >= 6 && b1 < 14)) ? console.log('Верно') : console.log('Невeрно');

//Задание_7 Определить четверть часа, n число от 0 до 59

let n = 44;
if (n > 0 && n <=15) {
    console.log ('Это первая четверть часа');
} else if (n > 15 && n <=30) {
    console.log ('Это вторая четверть часа');
} else if (n > 30 && n <=45) {
    console.log ('Это третья четверть часа');
} else if (n > 45 && n <=59) {
    console.log ('Это четвертая четверть часа');
} else {
    console.log('Число n должно быть больше 0 и меньше 59');
}

//Задание_8 Определить декаду месяца, day число от 1 до 31

let day = 25;
if (day >=1 && day <11) {
    console.log ('Это первая декада месяца');
} else if (day >= 11 && day <21) {
    console.log ('Это вторая декада месяца');
} else if (day >= 21 && day <=31) {
    console.log ('Это третья декада месяца');
} else {
    console.log ('Введите правильное число');
} 

//Задание_9 Скрипт перевода дней в года, месяцы, недели, часы, минуты и секунды

let days = 250,
    years = days / 365,
    monthes = days / 31,
    weeks = days / 7,
    hours = days * 24,
    minutes = hours * 60,
    seconds = minutes * 60;

console.log(days + ' дней');
console.log(years + ' лет');
console.log(monthes + ' месяцев');
console.log(weeks + ' недель');
console.log(hours + ' часов');
console.log(seconds + ' секунд');

if (weeks < 1) {
    console.log('Меньше недели');
} else if (monthes < 1) {
    console.log('Меньше месяца');
} else if (years < 1) {
    console.log('Меньше года');
} else {
    console.log('Больше года');
}

//Задание_10 Определить пору года и номер месяца, переменная day впервые задана в 8 задании

day = 300; //переопределяем переменную из задания 8
let monthNumber;

if (day >= 1 && day <= 31) {
    monthNumber = 1;
    console.log ('Это январь');
} else if (day > 31 && day <= 60) {
    monthNumber = 2;
    console.log ('Это февраль');
} else if (day > 60 && day <= 91) {
    monthNumber = 3;
    console.log ('Это март');
} else if (day > 91 && day <= 121) {
    monthNumber = 4;
    console.log ('Это апрель');
} else if (day > 121 && day <= 152) {
    monthNumber = 5;
    console.log ('Это май');
} else if (day > 152 && day <= 182) {
    monthNumber = 6;
    console.log ('Это июнь');
} else if (day > 182 && day <= 213) {
    monthNumber = 7;
    console.log ('Это июль');
} else if (day > 213 && day <= 244) {
    monthNumber = 8;
    console.log ('Это август');
} else if (day > 244 && day <= 274) {
    monthNumber = 9;
    console.log ('Это сентябрь');
} else if (day > 274 && day <= 305) {
    monthNumber = 10;
    console.log ('Это октябрь');
} else if (day > 305 && day <= 335) {
    monthNumber = 11;
    console.log ('Это ноябрь');
} else if (day > 335 && day <= 365) {
    monthNumber = 12;
    console.log ('Это декабрь');
} 

console.log(monthNumber, ' номер месяца');

switch(monthNumber) {
    case 1:
    case 2:
        console.log ('Это зима');
    break;

    case 3:
    case 4:
    case 5:
        console.log ('Это весна');
    break;

    case 6:
    case 7:
    case 8:
        console.log ('Это лето');
    break;

    case 9:
    case 10:
    case 11:
        console.log ('Это осень');
    break;

    case 12: 
        console.log('Это зима');
    break;
}



