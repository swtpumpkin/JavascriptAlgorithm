//if문을 이용한 짝수 홀수 구분
function evenOdd(num) {
  //2로 나눈 나머지가 0이면 짝수 아니면 홀수 반환
  if(num%2 === 0){
    return 'Even';
  }
  return 'Odd';
}
console.log(evenOdd(5));