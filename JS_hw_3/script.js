//Задание_1 Выведите числа от 1 до 50 и от 35 до 8.

for(let i = 1; i <= 50; i++) {
    console.log(i);
}

for(let i = 35; i >= 8; i--) {
    console.log(i);
}


//Задание_2 Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец.

let a = 89;
while (a >= 11) {
    document.write(a, '<br>');
    a--;
}

//Задание_3 С помощью цикла найдите сумму чисел от 0 до 100.

let sum = 0;
for(i=1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//задание_4 Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).

sum = 0;
for(i=1; i<=5; i++) {
    sum = 0;
    for(b = 1; b <= i; b++) {
        sum += b;
    }
    console.log(sum);
}

//Задание_5 Выведите чётные числа от 8 до 56. Решить задание через while и for. 
 
for(i = 8; i<=56; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

/*let c = 8;
while (c <= 56) {
    
    if (i % 2 !== 0) continue;
    console.log(c);
    c++; 
}*/

//Задание_6 
/*Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8*/

for(i = 2; i <= 10; i++) {
    for(j = 1; j <= 10; j++ ) {
        console.log(' ' + i + ' * ' + j + ' = ', i * j);
    }
}

/*7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/

let Num = 0;
let n = 1000;
while ( n > 49) {
    n /=2;
    Num++;
}
console.log('Конечное число =', n);
console.log('Число итераций =', Num);

//Задание_8  
/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение..*/
let Sum = 0;
let answerNum;

for(i = 0; ; i++) {
    answerNum = +prompt('Введите любое число');
    if(answerNum == 0 || answerNum == '') break;
    if(isNaN(answerNum)) {
        alert('Ошибка ввода! Введите число');
        break;
    }
    Sum = Sum + answerNum;
}
console.log('Сумма =', Sum);
console.log('Число итераций =', i);
console.log('Среднее арифметическое =', Sum / i );

/*Задание_9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/
/* Не сделано! */

let string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
console.log(string);

/*Задание_10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.*/

let D = 158964,
    DString = String(D),
    NumAmmount = DString.length, 
    Summa = 0;
console.log('Цифр в числе', NumAmmount);

for(i = 0; i < NumAmmount; i++) {
    let NUM = DString[i];
    console.log(NUM);
    Summa = Summa + +NUM;
}

console.log('Сумма чисел =', Summa);

for(i = NumAmmount - 1; i >=0; i--) {
    let NUMopposite = DString[i];
    console.log(NUMopposite);
}
