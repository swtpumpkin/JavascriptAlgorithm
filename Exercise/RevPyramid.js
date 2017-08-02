//역피라미드 만들기.
//피라미드 높이와 피라미드 출력을 위한 변수 선언.
var inputHeight = 5;
var result = '';

for(var num=inputHeight; num>0; num--){ //피라미드 높이의 숫자부터 1까지 내려오는 loop.
  if(num!==inputHeight){ //첫줄에는 띄어쓰기 생략을 함.
    for(var empty = 1; empty<=inputHeight-num; empty++){ //빈칸을 입력하는 for loop.
      result += ' '; //띄어쓰기 입력하는 코드.
    }
  }
  for(var star = num-1; star>=-num+1; star--){ //피라미드 입력하는 for loop.
    result +='*'; //별 입력하는 코드.
  }
  result +='\n'; //1줄의 코드가 끝나면 개행하는 코드.
}
console.log(result); //결과를 출력하는 코드.