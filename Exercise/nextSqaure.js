/*정수제곱근 판별하기
nextSqaure함수는 정수 n을 매개변수로 받는다.
n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.
*/
function nextSqaure(n){
  //Number.isInteger()함수로 루트n을 계산했을때 정수인지 실수인지 확인한다.
    if(Number.isInteger(Math.sqrt(n))){
      //정수가 맞으면 루트n+1을 제곱하여 반환한다.
      return (Math.pow(Math.sqrt(n)+1,2));
    }
    //정수가 아니면 no로 반환한다.
    return 'no';
  }
  
  console.log(nextSqaure(3));   // no
  console.log(nextSqaure(121)); // 144