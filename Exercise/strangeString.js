/*toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
바꾼 문자열을 리턴하도록 함수를 완성하라.
예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.
*/
function toWeirdCase(s) {
  //결과물로 받을 배열을 선언한다.
  var result = [];
  //단어별로 쪼개기 위해 띄어쓰기를 감지해 배열로 분리한다.
  var divStr = s.split(' ');
  //쪼개진 단어 별로 출력을 위한 for문을 만든다.
  for(var num = 0; num < divStr.length; num++){
    //각 단어를 합칠 배열을 선언한다.
    var sumArr = [];
    //각 단어를 한글자씩 배열로 바꿔 for문으로 각 글자를 검색한다.
    for(var numInner = 0; numInner<divStr[num].split('').length; numInner++){
      // 홀수번째는 대문자로 변환한다.
      if(numInner%2 === 0){
        sumArr.push(divStr[num].split('')[numInner].toUpperCase())
      // 짝수번째는 그냥 더한다.
      }else {
        sumArr.push(divStr[num].split('')[numInner])
      }
    }
    //각 쪼개진 각 단어를 한 문자열로 바꾼다.
    result.push(sumArr.join(''));
  }
  // 배열 사이를 한 문장으로 변환하고 단어 사이를 띄어주어 출력한다.
  return result.join(' ');
}
console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'