/*写一个函数，比较两个数组，返回一个新的数组。新数组包含传入的两个数组所有元素中，仅在
其中一个数组里出现的元素。如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。
换言之，我们需要返回这两个数组的对称差。
示例：
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) 返回 一个数组
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 返回 ["pink wool"]
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 返回 ["diorite", "pink wool"]
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] 返回 []
[1, 2, 3, 5], [1, 2, 3, 4, 5] 返回 [4]
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] 返回 ["piglet", 4]
[], ["snuffleupagus", "cookie monster", "elmo"] 返回 ["snuffleupagus", "cookie monster", "elmo"]
[1, "calf", 3, "piglet"], [7, "filly"] 返回 [1, "calf", 3, "piglet", 7, "filly"]
*/
/* 定义一个存储符合条件的元素的数组，及挑选合格元素的函数，反转参数执行
function diffArray(arr1, arr2) {
  var newArr = [];
  // 这是一个党异伐同的过程
  function diff(a,b){
  	for(let i=0;i<a.length;i++){
  		if(!b.includes(a[i])){
  			newArr.push(a[i])
  		}
  	}
  }
  diff(arr1,arr2);
  diff(arr2,arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/
/* 空数组连接两个数组的过滤结果数组，两种写法：
// 写法一
function diffArray(arr1, arr2) {
  // 这是一个党异伐同的过程
  return [].concat(arr1.filter(item=>!arr2.includes(item))).concat(arr2.filter(item=>!arr1.includes(item)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/
// 写法二
function diffArray(arr1,arr2) {
	return arr1.concat(arr2).filter(item=>!arr1.includes(item)||!arr2.includes(item));
}