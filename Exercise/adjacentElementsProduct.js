/*배열의 인접한 요소곱 중 가장 큰 값 구하기

정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.
*/
function adjacentElementsProduct(arr) {
  // 최대의 수를 담을 수 있는 변수를 선언한다.
  var maxNum = -Infinity;
  //배열의 요소마다 검색 할 수 있는 for문을 만든다.
  for(var num = 0; num<arr.length-1; num++){
    //앞뒤 요소의 곱이 담겨진 최대의 수보다 큰지 확인한다.
    if(arr[num]*arr[num+1] > maxNum){
      //요소의 곱이 이제까지 수보다 크다면 새로 값을 담는다.
      maxNum = arr[num]*arr[num+1];
    }
  }
  //최대의 수를 출력한다.
  return maxNum;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 5])); // 35
console.log(adjacentElementsProduct([3, -6, 2, -5, 7, -3])); // -10