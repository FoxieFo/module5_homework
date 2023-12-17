// Задание 6

const items = ['blanket', 'pillow', 'mattress', 'sheets', 'blanket'];

let equalItems = true;

for (let i = 0; i < items.length; i++) {

  if (items[i] !== items[i - 1]) {
    equalItems = false;
    break;
  }
}

console.log(equalItems);
