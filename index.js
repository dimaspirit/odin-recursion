console.log('Hello');

function fibs(n) {
  let result = [];

  for(let i = 0; i < n; i++) {
    if(result.length < 2) {
      result.push(result.length === 0 ? 0 : 1);
    } else {
      result.push(result[i-1] + result[i-2]);
    }
  }

  return result;
}

console.log(fibs(8));

