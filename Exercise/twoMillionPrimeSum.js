// 200만 이하의 소수 모두 더하기
var num = 2;
var result = 0;
// 200만까지 도는 while문
while(num<2000000){
  // 소수 검증하는 변수
  var priNum = true;
  // 소수 확인을 위한 for문
  for(var divNum = 2; divNum < num; divNum++){
    // 자기 자긴 전에 나눈 값이 0이면 false를 반환한다.
    if(num%divNum === 0){
      priNum = false;
      break;
    }
  }
  // priNum이 true이면 소수이다.
  if(priNum){
    // 소수의 값을 더한다.
    result += num;
  }
  num++
}
console.log(result) // 142913828922