//while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var num = 10;
while(num>=0){ //10부터 0까지 숫자를 반복하기 위한 while 문.
  // 홀수만 출력하는 3항연산자.
  (num%2)? console.log(num) : null;
  num--; //1씩 줄어들게 만드는 문자.
}