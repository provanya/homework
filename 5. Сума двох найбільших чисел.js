function sumTwoNumbers(a, b, c) {
  let min = Math.min(a, b, c);
  let max;
  if (min === a) {
    max = b + c;
  } else if (min === b) {
    max = a + c;
  } else {
    max = a + b;
  }

  return console.log('Сума двох найбільших чисел ' + max);
}

sumTwoNumbers(18, 5, 23);
//41;

sumTwoNumbers(43, 23, 9);
//66;

sumTwoNumbers(-5, -3, 433);
//430;

sumTwoNumbers(9.7, 43.5, -4.9);
//53.2;

sumTwoNumbers(-434, 324, -343);
//-19;

sumTwoNumbers(12.7, 11.5, -7);
//24.2;

sumTwoNumbers(9.7, 43.5, -4);
//53.2;
