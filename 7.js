// Задание 7

const arrNums = [1, 2, 0, 5, 8, 0, 10, 7, 3];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arrNums.length; i++) {

  if (typeof arrNums[i] === 'number' && !isNaN(arrNums[i])) {
    if (arrNums[i] === 0) {
      zeroCount++;
    } else if (arrNums[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log('Количество четных элементов:', evenCount);
console.log('Количество нечетных элементов:', oddCount);
console.log('Количество нулевых элементов:', zeroCount);
