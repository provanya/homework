function degree(a) {
  let a2 = a * a;
  let a4 = a2 * a2;
  let a8 = a4 * a4;
  return (
    console.log('А в квадраті ' + a2),
    console.log('Четвертий степіть ' + a4),
    console.log('До восьмої степені ' + a8)
  );
}

degree(4);

degree(3);
