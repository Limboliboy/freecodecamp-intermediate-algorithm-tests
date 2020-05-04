/*写一个函数，它接收两个参数，分别为一个数组arr及一个函数func。从数组第一个元素开始，用func检查数组每一项。
函数返回值是一个数组，由原数组中第一个使func为true的元素及之后的所有元素组成。若所有元素都不能让func为true，
则返回空数组[]。
示例：
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // [3, 4]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // []
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [3, 9, 2]
*/

function dropElements(arr, func) {
  // 删掉那些该舍弃的元素
  var len=arr.length;

  for(var i=0;i<len;i++){
  	if(func(arr[i])){
  		break;
  	}
  }

  arr.splice(0,i);
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n > 0; }));