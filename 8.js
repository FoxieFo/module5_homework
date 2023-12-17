// Задание 8

let myMap = new Map();

myMap.set ('bunny', 23);
myMap.set ('LA', true);
myMap.set (null, 'Ambar');

for (let [key, value] of myMap.entries()) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
