/*두 정수 사이의 합
adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.
x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.
예를들어 x가 3, y가 5이면 12를 리턴한다.
*/
function adder(x, y){
  var min = 0;
  var max = 0;
  var sum = 0;
  //x가 y보다 클 경우 min에는 y의 값을 담고 max에는 x의 값을 담는다.
  if(x>y){
    min = y;
    max = x;
  }
  //x가 y보다 작을 경우 min에는 x의 값을 담고 max에는 y의 값을 담는다.
  else if(x<y){
    min = x;
    max = y;
  }
  //만약 x와 y의 값이 같다면 둘 중 아무 수를 리턴한다(결론은 같은 수를 리턴하게 된다.).
  else if(x = y){
    return x||y;
  }
  //작은 수 부터 큰 수까지 도는 for문을 생성한다.
  for(min; min<=max; min++){
    //작은수부터 큰 수까지 순서대로 더한다.
    sum += min;
  }
  //더해진 수를 출력한다.
  return sum;
}
console.log(adder(3, 5)); // 12
console.log(adder(3, 3)); // 12