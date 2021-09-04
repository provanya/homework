function arr(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.unshift(a[i]);
  }

  return console.log(newArr);
}

arr([4, 5, 345, 'adfasd', 23, 'asdsddfs']);

arr([23, 43, 43, 434, 'fdfdfdf']);

arr(['43', 43, 4, 34, 'sdds', 34, 4]);
