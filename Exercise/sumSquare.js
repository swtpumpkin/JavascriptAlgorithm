//1부터 100까지 "제곱의 합"과 "합의 제곱"의 차는?
function sumSquare(num) {
  // 제곱의 합을 저장할 변수를 선언한다.
  var square = 0;
  // 합을 저장할 변수를 선언한다.
  var sum = 0;
  //1부터 할당할 숫자까지 오름차순을 도는 for문을 생성한다.
  for(var riseNum = 1; riseNum<=num; riseNum++){
    // 제곱의 합을 담는다.
    square += Math.pow(riseNum, 2);
    // 오름차순의 수를 모두 더한다.
    sum += riseNum;
  }
  //합의 제곱에서 제곱의 합을 빼준 결과를 반환한다.
  return Math.pow(sum, 2) - square;
}
console.log(sumSquare(100));