// 오른쪽 또는 왼쪽으로 읽어도 같은 문자열을 갖는 함수 만들기
function checkPalindrom(str) {
  // 정방향 또는 역방향을 이용하여 문자열이 같는지 확인한다.
  return (str === str.split('').reverse().join(''))? true : false ;
}
console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true
console.log(checkPalindrom('abccba')); // true
console.log(checkPalindrom('abcdba')); // false