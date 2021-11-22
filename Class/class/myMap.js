let arr = [2,8,6,3,1,7];

Array.prototype.myMap = function(callback){
  let index, element;
  let arrName = this;
  for (let i = 0; i < arrName.length; i++) {
    element = arrName[i];
    index = i;
    callback(index, element, arrName);
  }
}
arr.myMap(function(index, element, arrName){
console.log(index, element, arrName);
});