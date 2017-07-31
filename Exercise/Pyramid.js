//피라미드 만들기.
var inputHeight = 7; //피라미드 높이를 입력하는 변수.
var result = '';

for(var num = 0; num<inputHeight; num++){ // 0부터 피라미드 높이까지 도는 for 문.
  for(var empty = 1; empty<inputHeight-num; empty++){ //빈칸 입력하는 for 문.
    result +=' ';
  }
  for(var star = num; star>=-num; star--){ //피라미드 입력하는 for문.
    result += '*';
  }
  result +='\n'; //개행하는 함수.
}
console.log(result); //결과를 출력.