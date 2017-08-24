/*배열에서 특정 값만을 구하기
배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
*/
function getArray(arr) {
  //결과를 담을 배열의 변수를 선언한다.
  var resultArr = [];
  //배열의 순서를 출력하기 위한 for문을 선언한다.
  for(var num = 0; num < arr.length; num++){
    //짝수이고 3보다 큰 수를 찾는 if문을 작성한다.
    if(arr[num]%2 === 0 && arr[num]>3){
      //조건에 맞으면 결과 변수에 요소로 담는다.
      resultArr.push(arr[num]);
    }
  }
  //결과를 출력한다.
  return resultArr;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]