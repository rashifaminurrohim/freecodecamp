const sumAll = ([n , m]) => {
  let sum = 0;
  if (n === m) {
    sum = n + m;
  } else if (n < m) {
    for (let i = n; i <= m; i++) {
      sum += i;
    }
  } else {
    for (let i = m; i <= n; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumAll([10,5]))