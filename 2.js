// Задание 2

let x = true;

if (typeof x === 'number') {
    console.log('x — число')
} else if (typeof x === 'string') {
    console.log('x — строка')
} else if (typeof x === 'boolean') {
    console.log('x принадлежит логическому типу')
} else {
    console.log('Тип не определен')
}

//Код для задания 2, выполненный при помощи switch

let x = 23;

switch (typeof x) {
    case 'number':
      console.log('x — число');
      break;
  
      case 'string':
        console.log('x — строка');
        break;
    
     case 'boolean':
        console.log('x принадлежит логическому типу');
        break;
  
    default:
        console.log('Тип x не определён');
  }
