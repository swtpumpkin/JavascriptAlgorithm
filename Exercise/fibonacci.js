/*피보나치 수
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…
2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3이라면 2를 반환한다.
*/
function fibonacci(n) {
  //첫 시작의 숫자를 지정한다.
  var pre = 0;
  var cur = 1;
  //마지막 출력될 변수를 선언한다.
  var last = 0;
  //수열의 횟수를 지정하기 위해 for문을 사용한다.
  for(var num = 1; num<n; num++){
    // 바로 앞 두 숫자를 더해 last에 반환한다.
    last = pre + cur;
    //전 숫자에 현재 숫자를 할당한다.
    pre = cur;
    //현재 숫자에 마지막 숫자를 할당한다.
    cur = last;
  }
  //피보나치 수열의 마지막 수를 반환한다.
  return last;
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8