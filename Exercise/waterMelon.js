/*
waterMelon 함수는 정수 n을 매개변수로 입력받는다.
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.
예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.
*/
function waterMelon(n){
  //배열의 형태로 수박을 저장해둔다.
  var melon = ['수','박'];
  //결과물로 추가될 배열을 선언한다.
  var result = [];
  //n의 길이만큼 순환하는 for문을 선언한다.
  for(var num = 0; num<n; num++){
    //짝수이면 수를 추가하고 홀수면 짝을 추가하는 배열의 프로퍼티를 사용한다.
    result.push(melon[num%2])
  }
  // 배열로 된 결과를 join으로 문자로 바꿔준다.
  return result.join('');
}
console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));