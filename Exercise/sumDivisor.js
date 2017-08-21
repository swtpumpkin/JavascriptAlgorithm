/*약수의 합
어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.
약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다
*/
function sumDivisor(inputNum) {
  //더해질 숫자에 대한 변수를 선언한다.
  var sum = 0;
  //1부터 inputNum까지 도는 for loop를 만든다.
  for(var num = 1; num<=inputNum; num++){
    //inputNum % num이 0이면 약수이므로 약수를 찾는다.
    if(inputNum%num===0){
      //약수가 맞으면 sum에 더한다.
      sum +=num;
    }
  }
  //더해진 약수를 출력한다.
  return sum;
}

console.log(sumDivisor(12)); // 28