// Задание 1

let userInput = prompt('Введите число');

let value = +userInput;

if (!isNaN(value) && typeof value === 'number') {
    if (value % 2 ===0) {
        console.log('Ваше число четное')
    } else {
        console.log('Ваше число нечетное')
    }
} else {
    console.log('Упс! Кажется, вы ошиблись')
}
