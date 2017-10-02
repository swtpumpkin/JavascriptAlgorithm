//두 수 중에서 큰 숫자를 출력한다.
function max (a, b) {
  //숫자형인지 검색한다.
  if(typeof a && typeof b === 'number'){
    //a가 클경우 a를 반환한다.
    return (a > b)? a : b;
  }
}
console.log(max(1,5));
console.log(max(7,3));