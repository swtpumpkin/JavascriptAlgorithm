//10001번째 소수 구하기
function numberOfPrime(n) {
  //소수가 출력 될 때마다의 개수를 세는 변수를 선언한다.
  var countPrime = 0;
  //1부터 javascript가 출력 할 수 있는 가장 큰 수를 출력한다.
  for(var num = 1; num < Number.MAX_VALUE; num++){
    //소수를 찾기위한 변수를 선언한다.
    var count = 0;
    //1부터 자기 자신까지 돌 수 있는 for문을 선언한다.
    for(var innerNum = 1; innerNum<=num; innerNum++){
      //약수의 개수를 찾는 if문을 만든다.
      if(num%innerNum===0){
        //약수의 개수를 카운트한다.
        count++;
      }
    }
    //약수의 개수가 2인 수는 소수이므로 소수의 개수를 찾는 if문을 만든다.
    if(count === 2){
      countPrime++;
    }
    //countPrime이 입력받은 숫자가 됐을 때 수를 출력하고 break한다.
    if(countPrime === n){
      return num;
      break;
    }
  }
}
console.log(numberOfPrime(10001)); // 104743