//배열의 두점간의 최단 거리를 구해 배열로 반환해라.
function findMinDistance(array) {
  // 리턴용 배열
  var shortests = [];
  // 두점간의 거리를 비교했을 때, 자바스크립트 숫자 비교중 가장 멀리 떨어져 있을 수도 있으므로 최대치를 잡는다.
  var minDistance = Number.MAX_VALUE;
  // 배열의 근접값을 비교하기 위해 reduce함수를 사용하였다.
  array.reduce(function (pre, cur) {
      // 두 점간의 차를 구하고 distance에 저장한다.
      var distance = Math.abs(pre-cur);
      // 두 점간의 차가 점점 작아 질 수 있는데 비교 대상중 가장 작은 거리와 같다면 배열의 뒷 요소에 배열로 추가한다.
      if(distance === minDistance){
        shortests.push([pre, cur])
      }
      //지금까지의 비교된 배열의 거리보다 가깝다면 새로 저장을 해야하기 때문에 비교를 한다.
      if(distance < minDistance){
        minDistance = distance;
        //지금까지 비교한 숫자중 가장 짧으므로 새 비교대상을 넣어 배열을 초기화해준다.
        shortests = [[pre, cur]];
      }
      return cur;
  });
  return shortests;
}

var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]   