//Вторая часть ДЗ

//Задание_1 Преобразовать исходный код, используя +=, -=, *=, /=, ++, --

let num = 1; 
num +=12; //num = num + 12;
num -=14; //num = num - 14;
num *=5; //num = num * 5;
num /=7; //num = num / 7;
num++; //num = num + 1;
num--; //num = num - 1;
num +=7; //num = num + 7;
num -=18; //num = num - 18;
num *=10; //num = num * 10;
num /=15; //num = num / 15;
console.log(num);

//Задание_2 время в формате час:минута:секунда

let hour = 5,
    min = hour * 60,
    sec = min * 60;
console.log(hour, min, sec);

//Задание_3 Проверить, является ли первая буква буквой 'a'

let Str = 'absde',
    firstLetter = Str[0];
console.log(firstLetter);
if (firstLetter == 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

//Задание_4 Вывести на экран только фразу «богатый купец».

let string = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек.',
    startNum = string.indexOf('богатый купец'),
    finishNum = startNum + 13;
console.log(startNum, finishNum);
console.log(string.slice(startNum, finishNum ));

//Задание_5 Найти сумму трех чисел строки

let strNum = '597';
    sum = Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]);

console.log(sum);

//Задание_6

let Q = 110;
(Q == 10) ? console.log('Верно') : console.log('Неверно');

//Задание_7

let Z = 'test1';
if (Z == 'test') {
    console.log('Верно');
} else {
 console.log('Неверно');
}

//Задание_8

let P = 3,
    K = 5;
if (P <= 1 && K >=3) {
    console.log(P + K);
} else {
    console.log(P - K);
}

//Задание_9

let Name = prompt('Ваше имя'),
    Login = prompt('Введите логин'),
    Pass = prompt('Ваш пароль');

if (Login == 'admin' && Pass == 'nimda') {
    alert('Добро пожаловать, ' + Name + ' Вы успешно вошли на сайт.');
} else {
    alert(' ' + Name + ' , вы неверно ввели логин или пароль!');
}

//Задание_10 Определить пору года

let Month = 4, //любое число от 1 до 12
    Season,
    SeasonName;

if (Month == 1 || Month == 2 || Month == 12) {
    Season = 1;
} else if (Month == 3 || Month == 4 || Month == 5) {
    Season = 2;
} else if (Month == 6 || Month == 7 || Month == 8) {
    Season = 3;
} else if (Month == 9 || Month == 10 || Month == 11) {
    Season = 4;
} else {
    console.log('Введите число от 1 до 12');
}
console.log(Season);

switch(Season) {
    case 1:
        SeasonName = 'Зима';
    break;
    case 2:
        SeasonName = 'Весна';
    break;
    case 3:
        SeasonName = 'Лето';
    break;
    case 1:
        SeasonName = 'Осень';
    break;
    default:
        console.log('Ощибка');
    break;
}
console.log(SeasonName);






