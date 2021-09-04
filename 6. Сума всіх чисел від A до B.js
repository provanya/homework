function sumFromTo(a, b) {
  let i;
  let c = a;
  if ((a < b) & Number.isInteger(a)) {
    for (i = a + 1; i <= b; i++) {
      c += i;
    }
  } else {
    c =
      'знайти неможливо, оскільки число неціле або перше число більше за друге';
  }

  return console.log(
    'Сума всіх цілих чисел від ' + a + ' до ' + b + ' включно = ' + c
  );
}

sumFromTo(1, 23);
//276;

sumFromTo(23, 43);
//693;

sumFromTo(-6, -3);
//-18;

sumFromTo(9.7, 43.5);
//неможливо;

sumFromTo(-434, 324);
//-41745;

sumFromTo(12.7, 11.5);
//неможливо;

sumFromTo(9.7, 43.5);
//неможливо;
