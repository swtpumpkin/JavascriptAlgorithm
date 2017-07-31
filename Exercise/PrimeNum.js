var inputnum = 100;
var rise = 1;
var num = 1;
var array = [];

for(rise; rise <= inputnum; rise++){
  var count = 0;
  for(num = 1; num<=rise; num++){
    if(rise%num == 0){
      count += 1;
    }
  }
  if(count == 2){
    array.push(rise)
  }
}
console.log(array);