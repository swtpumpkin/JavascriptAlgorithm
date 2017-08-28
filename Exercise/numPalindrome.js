//세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?
//최대의 수를 저장 할 변수를 선언한다.
var maxNum = 0;
//100부터 999까지 도는 for문을 선언한다.
for(var num = 100; num<1000; num++){
  //곱한 값을 저장할 변수를 선언한다.
  var multi = 0;
  //100부터 999까지 도는 for문을 선언한다.  
  for(var innerNum = 100; innerNum<1000; innerNum++){
    //곱한 값을 변수에 담는다.
    multi = num * innerNum;
    //변수가 대칭인 변수인지 검증한다.
    if(multi === (''+multi).split('').reverse().join('')*1){
      //저장된 최대의 수보다 큰 수라면 maxNum에 곱한값을 다시 저장한다.
      if(multi>maxNum){
        maxNum = multi;
      }
    }
  }
}
// 대칭인 수의 최대값을 출력한다.
console.log(maxNum); //906609