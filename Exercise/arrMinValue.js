function getMinValueFromArray(array) {
  //배열을 오름차순으로 정렬한다.
  array.sort(function (a, b) { return a - b; });
  //배열의 요소를 오름차순으로 정렬하면 0번째 숫자가 가장 작으므로 배열의 0번째 숫자를 반환한다.
  return array[0];
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5