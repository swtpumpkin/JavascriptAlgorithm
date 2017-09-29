//1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
//반환될 가장 작은 수를 담을 변수를 선언한다.
var num = 0;
//1부터 1씩 더해지는 무한루프를 만든다.
while(true){
  num++
  var divided = true;
  //1부터 20까지 나눈 나머지가 0인 수를 찾는 for문을 선언한다.
  for(var innerNum = 1; innerNum <= 20; innerNum++){
    // 나눈 수가 1개라도 0으로 나누어 떨어지지 않는다면 멈추게 한다.
    if(num%innerNum !== 0){
      divided = false;
      break;
    }
  }
  // 모두 통과한 수만 true를 반환하므로 첫 번째로 반환하는 수만 출력한다.
  if(divided){
    console.log(num)
    break;
  }
}