function num(a) {
  let k = 0;
  let index = a;
  if (Number.isInteger(a) && 1 <= a && a <= 109) {
    while (index != 1) {
      if (index % 2 == 0) {
        index /= 2;
        k++;
      } else {
        index++;
        k++;
      }
    }
    return console.log('Кількість перетворень = ' + k);
  } else {
    return console.log('Число повинно бути цілим і в діапазоні від 1 до 109');
  }
}

num(24);
//6

num(110);
//error
num(72);
//10
num(5);
//5
num(43.7);
//error
num(109);
//10

num(150);
//error

num(11);
//6
num(-7);
//error
