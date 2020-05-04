/*写一个数组扁平化的函数,能够处理数组多级嵌套的情况
示例：
steamrollArray([[["a"]], [["b"]]]) // ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]
*/

/*function steamrollArray(arr) {
  // 扁平化，扁平化……
  return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);*/

/*function steamrollArray(arr) {
  // 扁平化，扁平化……
  let result=[];
  function flatten(arr){
  	for(let i=0;i<arr.length;i++){
  		if(Array.isArray(arr[i])){ 
  			flatten(arr[i]);
  		}
  		else{
  			result.push(arr[i]);
  		}
  	}
  }
  flatten(arr);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));*/

/* forEach()版
function steamrollArray(arr) {
  // 扁平化，扁平化……
  let result=[];
  function flatten(arr){
  	arr.forEach(item=>item instanceof Array?flatten(item):result.push(item));
  }
  flatten(arr);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));*/

//Array.reduce() 版
function steamrollArray(arr) {
  // 扁平化，扁平化……
  return arr.reduce((prev,item)=>prev.concat(item instanceof Array ? steamrollArray(item):item),[]);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/* 拓展
判断对象是否为数组的方法：

var str='1';

1、 ES5 Array.isArray()
Array.isArray(str); // false

2、 instanceof 操作符 
str instanceof Array; // false

3、constructor 属性
str.constructor===Array; // false

4、原型 Object.prototype.toString.call(obj)
Object.prototype.toString.call(str); // [object String]
！！原型上的 toString() 方法返回对象的数据类型，Array、Function等类型是Object的实例，
重写了toString()方法，根据原型链知识，toString()方法被覆盖成 转换成字符串 这一功能

例子：
var arr=[1,2,3];
console.log(Array.prototype.hasOwnProperty("toString")); // true
console.log(arr.toString()); // 1,2,3
delete Array.prototype.toString; // delete操作符可以删除实例属性
console.log(Array.prototype.hasOwnProperty("toString")); // false
console.log(arr.toString()); // "[object Array]"

*/