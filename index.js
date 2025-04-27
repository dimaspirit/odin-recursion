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

let fibsRecResult = [];

function fibsRec(n) {
  if(n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

function fibsRecSequent(n) {
  let result = [];

  for(let i = 0; i < n; i++) {
    result.push(fibsRec(i))
  }

  return result;
}

console.log(`fibonacci sequence with loop ${fibs(8)}`);
console.log(`fibonacci sequence with recursion ${fibsRecSequent(8)}`);

