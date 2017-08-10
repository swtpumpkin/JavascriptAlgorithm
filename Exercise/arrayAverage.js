//입력한 배열의 평균을 구한다.
function avr (arr) {
  var sum = 0; //더해질 숫자들의 변수를 선언한다.
  //0부터 배열의 길이만큼 loop를 돌게 만든다.
  for(var num = 0; num < arr.length; num++){
    //숫자형인지 검증을 한다.
    if(typeof arr[num] === 'number'){
      //배열들의 숫자들을 모두 더해준다.
      sum += arr[num];
    }
  }
  //배열 내 모든 숫자를 더하고 배열의 갯수만큼 나눈후 평균을 반환한다.
  return sum/arr.length;
}
console.log(avr([1,5,6,8]));
console.log(avr([114,5,7,9,334]));