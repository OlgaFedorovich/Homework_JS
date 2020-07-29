//ДОМАШНЯЯ РАБОТА 5_2

//1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

function calculation (a, b, c) {
    return (a - b) / c;
}
let result = calculation(376, 67, 3);
console.log(result);

//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function multiplyDouble (a) {
    return a ** 2;
}
let rslt = multiplyDouble(3);
console.log('Квадрат = ', rslt);

function multiplyItselfTriple (a) {
    return a ** 3;
}
let rslt2 = multiplyItselfTriple(3);
console.log('Куб =', rslt2);


//3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function min(a, b) {
    if (a > b) return b;
    else return a;
}

function max(a, b) {
    if (a < b) return b;
    else return a;
}

let minimum = min(90, -8);
console.log(minimum);

let maximum = max(90, -8);
console.log(maximum);

/*4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.*/

function getNumbers (firstNumber, secondNumber) {
    let array = [];
    for (let i = firstNumber; i <=secondNumber; i++) {
        array.push(i);
    }
    return array;
}

let arr = getNumbers(+prompt('Введите число, с которого будет начинаться числовой массив'), +prompt('Введите число, с которого будет заканчиваться числовой массив'));
console.log(arr);

function showArray(arr) {
    for(let i = 0; i < arr.length; i++) {
       console.log(arr[i]); 
    }
}
showArray(arr);

/*5.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.*/

function isEven(a) {
    if ( a % 2 == 0) return true;
    else return false;
}

let result1 = isEven(25);
console.log(result1);

/*6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/

function createArray(array) {
    let newEvenArray = [];
    for(let i = 0; i < array.length; i++) {
        let result2 = isEven(array[i]);
        if (result2 == true) newEvenArray.push(array[i]);
        else continue;
        
    }
    console.log('Массив с четными числами: ', newEvenArray);
    return newEvenArray;
}
createArray([1, 5, 7, 9, 6, 10, 20, 28]);

/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр,
непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то
пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
********* 
*/

function pyramid(height, symbol) {
    symbol = symbol || null;
    for(let i = 1; i <= height; i++) {
       for(let k = 1; k <= i; k++) {
           if (symbol) {document.write(symbol);} 
           else {
               document.write(i);
           }
       }
       document.write('<br>');
    }
}
pyramid(10, 'o');


//8. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.


/*9 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию. */

function summa(number) {
    let sum = 0;
    let numString = String(number);   
    for(i = 0; i < numString.length; i++) {
        sum += +numString[i];
    } 
    if (sum > 9) {
        summa(sum); 
    }
    console.log(sum);
}

summa(237598);

/*10. Дан массив с числами (передается параметром). Выведите последовательно его
элементы, используя рекурсию и не используя цикл. */

function printArray(array) {
    console.log(array[i]);
    i++;
    if(i < array.length) printArray(array);
}

let i = 0;

printArray([-20, 5, 85, 4, 7, 8, 9]);





