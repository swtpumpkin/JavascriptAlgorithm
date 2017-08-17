//alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
function alphaString46(s) {
  /* 문자열을 배열의 형태로 바꿔 4자리 이상 6자리 이하인지 확인한다.
    확인 후 true이면 정규표현식을 사용하여 문자열이 숫자형인지 확인 후 맞으면 true
    문자열이 숫자 이외의 다른 문자가 있으면 false를 반환한다.
    if문에서 3항연산자로 변환하였다.
  */
  return (s.split('').length<= 6 && s.split('').length>= 4)? /^\d+$/.test(s) : false;
}
console.log(alphaString46('123456')) //true
console.log(alphaString46('39472')) //true
console.log(alphaString46('1234567')) //false
console.log(alphaString46('a1234')) //false
console.log(alphaString46('ab')) //false
console.log(alphaString46('123')) //false