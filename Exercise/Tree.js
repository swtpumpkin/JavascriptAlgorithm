//트리만들기!
var line = 8; //트리의 높이
var star = ''; // 트리 출력 결과물을 위한 변수
for(var num = 1; num <= line; num++){ //트리 높이를 출력하기 위한 반복문
  if(num<=3){ //트리 윗부분을 위한 if문
    for(var h = 1; h<=num; h++){ //직각삼각형을 위한 반복문
      star += '*';
    }
    star +='\n'; //for문이 끝나면 개행하는 문자.
  }else if(num>3){ //트리 아랫부분을 위한 if문
    for(var h_1 = 1; h_1<=num-3; h_1++){ //직각삼각형을 쌓기 위해서 -3을 해줌.
      star += '*';
    }
    star +='\n'; //for문이 끝나면 개행하는 문자.
  }
}
console.log(star); //트리 결과 출력.