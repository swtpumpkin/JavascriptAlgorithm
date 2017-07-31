// 지정한 숫자까지 소수 찾기!
var inputnum = 100; // 소수를 찾길 원하는 범위 input.
var rise = 1;
var num = 1;
var array = [];

for(rise; rise <= inputnum; rise++){ //1부터 할당한 숫자까지 오름차순을 하는 for문.
  var count = 0; //소수 찾는 변수를 0으로 초기화.
  for(num = 1; num<=rise; num++){
    if(rise%num == 0){ //오름 차순의 숫자와 1부터 순서대로 나눠서 0이 어떤 것인지 알아내는 if문.
      count += 1; 
    }
  }
  if(count == 2){ //소수는 1과 자기자신만 나눌 수 있는 숫자로써 나머지가 0인 숫자가 2번 있어야 함.
    array.push(rise) //array에 소수인 숫자를 추가함.
  }
}
console.log(array); //모든 loop가 끝나고 array를 출력함.