//1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
//반환될 가장 작은 수를 담을 변수를 선언한다.
var minNum = 0;
//1부터 1씩 더해지는 무한루프를 만든다.
for(var num = 1; ; num++){
  var count = 0;
  //1부터 20까지 나눈 나머지가 0인 수를 찾는 for문을 선언한다.
  for(var innerNum = 1; innerNum <= 20; innerNum++){
    //나머지가 0인 수를 카운트한다.
    if(num%innerNum === 0){
      count++;
    }
  }
  //1부터 20까지 모두 나머지가 0인 함수이면 for문을 끝낸다.
  if(count === 20){
    minNum = num;
    break;
  }
}
console.log(minNum); //232792560