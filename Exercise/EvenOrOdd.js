// inputnum에 숫자 변경하여 짝수와 홀수 구분하는 알고리즘
var inputnum = 9;
var result ='';
if(inputnum %2 ==0){ //2로 나눈 나머지가 0이면 짝수
  result = 'Even';
}
else { //2로 나눈 나머지가 0이 아닌 다른 숫자이면 홀수
  result = 'Odd';
}
console.log(result); //결과 출력