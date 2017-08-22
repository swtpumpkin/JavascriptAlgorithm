/* 하샤드 수
하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200
Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.
*/
function isHarshad(n){
  //각 자리 수를 배열로 변환한다.
  var strArr = n.toString().split('');
  //쪼개진 수를 더할 변수를 선언한다.
  var numSum = 0;
  //배열의 각 자리를 출력할 for문을 설정한다.
  for(var num = 0; num<strArr.length; num++){
    //각 배열의 수를 numSum에 더한다.
    numSum += strArr[num]*1
  }
  //만약 입력된 숫자와 각 자리수의 숫자를 더한 수를 나눈 나머지가 0이면 true 다른수이면 false를 반환한다.
  return (n%numSum===0)? true: false;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
console.log(isHarshad(2341)); // false
console.log(isHarshad(222220)); // true