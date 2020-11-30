console.log(1, 2, 3);

const replaceToAmmount = (string) => {

    const stringArr = string.split('');

    let obj = {};

    stringArr.forEach(item => {
        obj[item] = (obj[item] || 0) + 1;
    });

    const newArray = stringArr.map(item => obj[item]);

    return newArray.join('');
}

console.log(replaceToAmmount('abnsowlwlancjhahs'));