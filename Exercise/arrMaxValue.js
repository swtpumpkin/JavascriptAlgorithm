function getMaxValueFromArray(array) {
  //내림차순으로 배열을 정리한다.
  array.sort(function (a, b) { return b - a; });
  //내림차순의 0번째 숫자는 가장 큰 숫자이므로 배열의 첫번째 숫자를 반환한다.
  return array[0];
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7