//while문을 사용하여 0부터 10미만 정수 중에서 짝수만을 작은 수부터 출력하시오.
var num = 0;
while(num<10){ //0부터 10까지 출력을 위한 반복문.
  // 짝수 출력 위한 3항연산자
  (num%2)? null : console.log(num);
  num++; //모든 조건이 실행되고 나면 1씩 더한다.
}