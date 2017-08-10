(function printNow() {
  var today = new Date();
  var dayNames= ['(일요일)','(월요일)','(화요일)','(수요일)','(목요일)','(금요일)','(토요일)'];
  var day = dayNames[today.getDay()];
  var year = today.getFullYear(),
      month = today.getMonth() + 1, //월은 0부터 11까지 있으므로 +1을 해서 출력해야 한다.
      date = today.getDate(),
      hour = today.getHours(),
      minute = today.getMinutes(), 
      second = today.getSeconds(),
      ampm = hour >= 12? 'PM' : 'AM';

  //12시간제로 변경
  hour = hour % 12;
  hour = hour ? hour : 12;

  //10미만인 분과 초를 2자리로 변경
  //분과 초가 1자리일 경우 0을 붙여 2자리로 만들어 줌
  minute = minute < 10? '0' + minute : minute;
  second = second < 10? '0' + second : second;

  //현재 시간
  var now = year + '년' + month + '월' + date + '일' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;
  console.log(now);
  setTimeout(printNow, 1000); //millisecond 단위이기 때문에 매초 출력을 하려면 1000으로 설정해야 한다.
}());