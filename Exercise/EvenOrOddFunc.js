//함수를 이용하여 짝수 홀수 구분하기.
function evenOrOdd(inputNum) {
  //삼항연산자로 결과를 한줄로 출력한다.
  return (inputNum%2 === 0)? 'even' : 'odd';
}
//짝수 홀수 구분할 숫자를 입력한다.
console.log(evenOrOdd(9));