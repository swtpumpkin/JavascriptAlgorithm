//10001번째 소수 구하기
function numberOfPrime(n) {
  var num = 2;
  var priCnt = 0;
  // 무한 루프 선언
  while(num){
    // 소수인지 아닌지 판별하는 boolean타입 선언
    var priNum = true;
    // 자기자신 전까지 나누어 떨어지는 숫자가 있다면 false를 반환하는 for문 선언
    for(var divNum = 2; divNum < num; divNum++){
      if(num%divNum === 0){
        priNum = false;
        break;
      }
    }
    // 자기 자신까지의 수까지 떨어지지 않는다면 소수이므로 소수의 개수를 count한다.
    if(priNum){
      priCnt++
    }
    // 입력된 숫자와 소수의 숫자가 같은지 확인 후 그 때의 소수를 출력한다.
    if(priCnt === n){
      return num
      break
    }
    num++
  }
}
console.log(numberOfPrime(10001)); // 104743