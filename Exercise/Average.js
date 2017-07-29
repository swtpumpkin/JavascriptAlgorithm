//어떠한 array내의 숫자가 와도 모든 숫자에 대한 평균 구하기
var inputarray = [2, 4, 12, 28, 19]; //배열 안에 평균 계산을 원하는 숫자 입력
var sum = 0;
var avg = 0;
var num = 0;
/*
배열의 첫번째 칸은 0부터 시작된다.
모든 배열의 숫자를 더하려면 0 < inputarray.length를 사용해야만 한다.
*/
for(num; num<inputarray.length; num++) { 
  sum +=inputarray[num] //모든 array의 숫자를 더한다.
}
avg = sum/inputarray.length ; //더한 숫자에 더한 갯수만큼 나눈다.
console.log(avg); //평균을 출력한다.