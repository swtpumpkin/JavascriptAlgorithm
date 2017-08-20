/*핸드폰번호 가리기
핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.
*/
function hideNumbers(str){
  // 마지막 4자리 숫자만 떼낸다.
  var lastFour = str.split('').slice(-4).join('');
  // 별로 표시될 부분을 배열로 선언한다.
  var star = [];
  // 앞자리 별로 표시될 길이를 별로 돌 수 있도록 for문 설정함.
  for(var num = 0; num<str.split('').length-4; num++){
    //for문이 한번 돌때마다 별을 찍음.
    star.push('*');
  }
  //별을 string타입으로 변환함.
  var starStr = star.join('');
  // 별과 마지막 네 숫자를 더해 출력한다.
  return starStr+lastFour;
}
console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888