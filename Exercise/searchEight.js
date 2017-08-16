// 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기
function searchEight(number) {
  //8이 나올때마다 개수를 셀 변수.
  var count = 0;
  // 1부터 입력된 숫자(10,000)까지 도는 for 문.
  for(var num = 1; num<=number; num++){
    // number형에서 String으로 변환.
    var str = num.toString()
    //앞자리부터 뒷자리순회하는 for문
    for(var numIn = 0; numIn<=str.length; numIn++){
      //각 자리마다 8이 맞는지 확인.
      if(str[numIn] == 8){
        //8이 맞으면 +1씩 더해 count함.
        count += 1;
      }
    }
  }
  // 8의 개수를 반환함.
  return count;
}
console.log(searchEight(10000)); //4000