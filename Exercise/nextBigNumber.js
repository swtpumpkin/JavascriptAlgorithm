/* 다음 큰 숫자
어떤 수 N(1≤N≤1,000,000) 이 주어졌을 때, N의 다음 큰 숫자는 다음과 같습니다.
- N의 다음 큰 숫자는 N을 2진수로 바꾸었을 때의 1의 개수와 같은 개수로 이루어진 수입니다.
- 1번째 조건을 만족하는 숫자들 중 N보다 큰 수 중에서 가장 작은 숫자를 찾아야 합니다.
예를 들어, 78을 2진수로 바꾸면 1001110 이며, 78의 다음 큰 숫자는 83으로 2진수는 1010011 입니다.
N이 주어질 때, N의 다음 큰 숫자를 찾는 nextBigNumber 함수를 완성하세요.
*/



function nextBigNumber(n){
  //입력된 숫자의 1의 개수를 세는 for문
  if(n>=1 && n<=1000000){
    var answer = 0;
    var countPre = 0;
    var increaseNum = n;
    var arr = ''+n.toString(2).split('')
    for(var num = 0; num<arr.length; num++){
      if(arr[num]*1 === 1){
        countPre++
      }
    }
    //조건에 맞을 때 까지 도는 무한루프의 while문
    while(true){
      increaseNum++
      var innerCount = 0;
      var increaseArr = ''+increaseNum.toString(2).split('')
      //증가된 숫자의 2진법 1의 개수를 세는 for문
      for(var innerNum = 0; innerNum<increaseArr.length; innerNum++){
        if(increaseArr[innerNum]*1 === 1){
          innerCount++;
        }
      }
      //증가된 숫자의 1의 개수와 입력된 1의 개수가 동일한지 확인하는 if문
      if(innerCount === countPre){
        return increaseNum;
        break;
      }
    }
    return answer;
  }
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(78)); // 83
console.log(nextBigNumber(857171)); //857173