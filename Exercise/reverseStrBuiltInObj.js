//문자열을 역순으로 바꿔주는 함수
function reverseStr(str) {
  return str.split('').reverse('').join(''); //Built-in-Object를 이용하여 한줄로 문자열을 역순으로 반환 가능하다.
  //String -> Array -> Reverse -> String
}
console.log(reverseStr('hello')); //olleh