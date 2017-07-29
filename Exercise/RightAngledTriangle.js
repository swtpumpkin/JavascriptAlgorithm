//입력 높이에 따른 직각삼각형을 별로 나타내기.
var heignt = 10;
var star = 1;
var blank = 1;
var tri = '';

for(blank; blank<= heignt; blank++){ //개행을 위한 for loop
  /*
  오류 해결!
  디버깅 모드에서 확인한 결과 star을 1로 설정 안하면 숫자가 star++된 상태로 저장된다.
  따라서 star = 1로 정의해야한다.
  그래야만 1부터 숫자 하나씩 더해지게 된다.
  */
  for(star = 1 ; star<=blank; star++){ //한 층마다 쌓여야 할 별 갯수를 지정하는 for loop
    tri += '*';
  }
  tri += '\n'; //각 층마다 별이 다 쌓이게 되면 개행을 위한 코드. \n는 개행한다는 문자.
}
console.log(tri);