//최단 거리 1차원 점의 쌍 구하기 (DAUM)
function findMinDistance(array){
  //반환할 배열의 빈 문자열 생성
  var arr = [];
  //0부터 Array.length의 길이만큼 for loop 생성
  for(var num = 0; num<array.length; num++){
    //배열의 숫자 차이가 1인 경우를 찾음
    if(array[num+1]-array[num] === 1){
      //빈 배열에 숫자 차이가 1인 배열 쌍을 배열로 추가한다.
      arr.push([array[num],array[num+1]]);
    }
  }
  //추가된 배열을 출력한다.
  return arr;
}
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]