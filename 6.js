// Задание 6

const items = ['blanket', 'pillow', 'mattress', 'sheets', 'blanket'];

let hasDuplicates = false;

for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
        if (items[i] === items [j]) {
            hasDuplicates = true;
            break;
        }
    }
    if (hasDuplicates) {
        break;
    }
}

if (hasDuplicates) {
    console.log('true');
  } else {
    console.log('false');
  }
