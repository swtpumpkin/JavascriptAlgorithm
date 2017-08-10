//문자열을 배열로 전달 받아 문자열 하나로 반환하는 함수
function str (arr) {
  //기본자료형으로 string 더 해질 선언한다.
  var stringSum ='';
  //배열의 순서대로 선택하는 for loop가 돌게 만든다.
  for(var num = 0; num<arr.length; num++){
    //stringSum에 문자열+다른자료형은 문자형이기 때문에 문자열로 더해진다.
    stringSum += arr[num];
  }
  //문자열로 반환한다.
  return stringSum;
}
console.log (str(['a','b','c']));
console.log (str([1,2,3,4]));