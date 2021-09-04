function sumDifferenceProductFraction(a, b) {
  if (a != 0 && b != 0) {
    a *= a;
    b *= b;

    let S = a + b;
    let D = a - b;
    let P = a * b;
    let F = a / b;
    return (
      console.log('Сума ' + S),
      console.log('Різниця ' + D),
      console.log('Добуток ' + P),
      console.log('Частка ' + F)
    );
  } else {
    console.log('В умові задачі вказано що дано два ненульових числа))');
  }
}

sumDifferenceProductFraction(4, 3);

sumDifferenceProductFraction(0, 3);
