// 200만 이하의 소수 모두 더하기
var num = 2;
var result = 0;
// 200만까지 도는 while문
while(num<2000000){
  // 소수 검증하는 변수
  var priNum = true;
  for(var divNum = 2; divNum < num; divNum++){
    if(num%divNum === 0){
      priNum = false;
      break;
    }
  }
  if(priNum){
    result += num;
  }
  num++
}
console.log(result) // 142913828922