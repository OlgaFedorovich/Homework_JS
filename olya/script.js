// console.log(1, 2, 3);

// const replaceToAmmount = (string) => {

//     const stringArr = string.split('');

//     let obj = {};

//     stringArr.forEach(item => {
//         obj[item] = (obj[item] || 0) + 1;
//     });

//     const newArray = stringArr.map(item => obj[item]);

//     return newArray.join('');
// }

// console.log(replaceToAmmount('abnsowlwlancjhahs'));

// function f() { return f}
// var sj =  new f() instanceof f;
// console.log(sj);

function a() {
    console.log(this)
  }
  a.call(null)