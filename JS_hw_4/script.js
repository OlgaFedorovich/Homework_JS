//ЗАДАНИЕ_1 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}
document.write('<br/>');
/*ЗАДАНИЕ_2 Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.*/

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] > -10 && arr2[i] < -3) console.log(arr2[i]); 
    else { continue; 
    }
}

/*ЗАДАНИЕ_3 Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.*/
let arr3 = [],
    result = 0;
for(let i = 23; i <= 57; i++) {
    arr3.push(i);
}
document.write(arr3, '<br/>');

for(let i = 0; i < arr3.length; i++) {
    result += arr3[i];
} 
document.write(`Сумма = ${result} <br/>`);

arr3 = [];
let i = 23;
while(i <= 57) {
    arr3.push(i);
    i++;
}
document.write(arr3, '<br>');

/*ЗАДАНИЕ_4 Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for(let i = 0; i < arr4.length; i++) {
    if(arr4[i][0] == '1' || arr4[i][0] == '2' || arr4[i][0] == '5') 
    console.log(arr4[i]); 
    else continue;
}

/*ЗАДАНИЕ_5 Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/

let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for(let i = 0; i < weekDays.length; i++) {
    if(weekDays[i] == 'Суббота' || weekDays[i] == 'Воскресенье') 
    document.write(`<b>${weekDays[i]}</b>, `); 
    else document.write(weekDays[i], ',' );
}

/*ЗАДАНИЕ_6 Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length. */

let names = ['Olga', 'Darya', 'Alexandr', 'Michail', 'Anna'];
names.push('Mariya');
console.log(names[names.length - 1]);

/*ЗАДАНИЕ_7 Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.*/
let numbers = [];
let answer;
for(let i=0; ;i++) {
    answer = prompt('Введите число');
    if (answer == '') break;
    else numbers.push(answer);
}
document.write('<br> Числа, которые Вы ввели:', numbers, '<br>');

numbers.sort(function (a,b){
    return (a - b);
});
document.write('Сортировка', numbers, '<br/>');

/*ЗАДАНИЕ_8 Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.*/
let arr5 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr5.reverse());

arr5 = [12, false, 'Текст', 4, 2, -5, 0];
let j = arr5.length - 1,
    arr6 = [];
while(j >=0) {
    arr6.push(arr5[j]);
    j--;
}
console.log(arr6);

/*ЗАДАНИЕ_9 Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

let arr7 = [5, 9, 21, , , 9, 78, , , ,6],
    emptyElements = 0;
    for(let i = 0; i < arr7.length; i++) {
        if(arr7[i] == undefined) emptyElements++;
        else continue;
    }
    console.log('Количество пустых элементов = ', emptyElements);


/*ЗАДАНИЕ_10 Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arr8 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    summ = 0,
    firstZeroIndex = arr8.indexOf(0),
    lastZeroIndex = arr8.lastIndexOf(0);
console.log(firstZeroIndex, lastZeroIndex);
if(firstZeroIndex == lastZeroIndex || firstZeroIndex == -1) console.log('0');

for(let i = firstZeroIndex; i < lastZeroIndex; i++ ) {
    summ += arr8[i];
}
console.log('Сумма между двумя нулями = ', summ);


/*11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь.*/
//ВСЕ РЕШЕНИЯ этой задачи НАШЛА В ИНТЕРНЕТЕ

let a = 0;
let max = prompt('Введите высоту треугольника');
let space = "",
    symbol = "";

while (a < max) {
    space = "";
    symbol = "";
    for (let j = 0; j < max - a; j++) space += " ";
    for (let j = 0; j < 2 * a + 1; j++) symbol += "˄";
    console.log(space + symbol);
    a++;
}

//Еще одно решение

let lines = line = 5, с='.', b='*';
while(line-->0) console.log(Array(line+1).join(с) +Array(2*(lines-line)).join(b) +Array(line+1).join(с));

//Еще одно решение

let line1 = 10, // Quantity of lines
    space1 = line1 - 1, // Quantity of gaps in the first line
    star = 1; // Quantity of stars in the first line

    for (let h = 0; h < line1; h++) {
        for (let wsp = 0; wsp < space1; wsp++) {
            document.write("&nbsp\n");
        }
        for (let wst = 0; wst < star; wst++) {
            document.write("*");
        }
        space1 -= 1;
        star += 2;
        document.write("<br>");
    }