// 6. 세 수를 입력받아 큰 수를 반환하는 함수 1번 함수 사용하기
function threeNum(arr) {
  return Math.max.apply(null, arr);
}
console.log(threeNum([1,7,'a']));//배열 중 하나라도 숫자가 아닌 다른 형태의 자료형이 있으면 NaN으로 출력된다.
console.log(threeNum([11,7,9])); //11