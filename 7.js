// Задание 7

const arrNums = [1, 2, 0, 5, 8, 'orange', false, null, 0, 10, 7, 3];

let evenNums = 0;
let oddNums = 0;
let zeroNums = 0;

for (i = 0; i < arrNums.length; i++) {

    if (typeof arrNums[i] === 'number' && !isNaN(arrNums[i])) {
        if (arrNums[i] === 0) {
            zeroNums++
        } else if (arrNums[i] % 2 === 0) {
            evenNums++
        } else {
            oddNums++
        }
    }
}

console.log('Количество четных элементов:', evenNums);
console.log('Количество нечетных элементов:', oddNums);
console.log('Количество нулевых элементов:', zeroNums);
