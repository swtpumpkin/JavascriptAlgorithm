//최단 거리 1차원 점의 쌍 구하기 (DAUM)
function findMinDistance(array){
  var distance = 0;
  var arr = [];
  for(var num = 0; num<array.length; num++){
    distance = array[num+1]-array[num];
    if(distance === 1){
      arr.push([array[num],array[num+1]]);
    }
  }
  return arr;
}
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]