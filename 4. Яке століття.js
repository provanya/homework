function century(a) {
  if (Number.isInteger(a) && a > 0) {
    return console.log(Math.ceil((a = a / 100)) + ' століття');
  } else {
    return console.log('дробове або відємне');
  }
}

century(1858);

century(402);

century(1.4);

century(9.7);

century(-4);
