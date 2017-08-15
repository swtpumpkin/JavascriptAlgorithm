//문자열을 역순으로 바꿔주는 함수
function reverseStr(str) {
  var revStr =''; //출력을 위한 빈 문자 변수를 선언한다.
  for(var num = str.length-1; num>=0; num--){ //for문을 역으로 loop시킨다.
    revStr += str[num]; //빈 문자에 역순으로 추가한다.
  }
  return revStr; //역순으로 추가된 변수를 반환한다.
}
console.log(reverseStr('hello')); //olleh