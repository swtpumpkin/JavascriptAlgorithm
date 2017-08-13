// 아무 숫자를 입력해서 요일 구하기
function getDay(num) {
  // day array에 일요일~월요일까지 배열로 입력을 한다.
  var day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  // 입력받은 숫자를 7로 나눈 나머지로 하게 되면 7가지의 숫자가 골고루 나오게 된다.
  return day[num%7];
}
console.log(getDay(12));