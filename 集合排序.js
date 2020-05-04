/*写一个函数，它接收两个或多个数组为参数。我们需要对这些数组中所有元素
进行去除重复元素的处理，并以数组的形式返回去重结果，结果数组中的元素
顺序必须与其传入的顺序保持一致
示例：
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // [1, 3, 2, 5, 4]

*/
function uniteUnique(arr) {
	return [...arguments].reduce((total,value)=>total.concat(value)).reduce((result,value)=>{
		if(result.includes(value)){
			return result;
		}
		else{
			result.push(value);
			return result;
		}
	},[]);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/* 
!！踩坑
	push()方法：在数组末尾插入元素，返回新的长度，并不是返回新的数组！
	pop()方法：删除数组的最后一个元素，返回删除的元素
	shift()方法：删除数组的第一个元素从其中，返回删除的元素
	unshift()方法：在数组头部插入元素，返回新的长度
*/
/*
！！迭代器方法 并不会改变原数组
	1、不生成新数组：
	forEach()
	every()
	reduce()
	2、生成新数组，不改变原数组：
	map()
	filter()
*/
/* 
数组 reduce 用法拓展：
	arr.reduce(function(prev,cur,index,arr){
		……
	},init);
prev 上一次调用回调的返回值，或者初始值init
cur 当前处理的数组元素
index 当前处理元素的索引，提供初始值时为0，否则为1
init 初始值

var arr=[3,9,4,3,6,0,9];
1、数组求和
var sum=arr.reduce((prev,cur)=>prev+cur,0); // 34

**forEach()方法：
var total=0;
var sum=arr.forEach(item => total += item)

2、找出数组最大值
var max=arr.reduce((prev,cur)=>cur>prev?cur:prev); // 9

**Math.max()方法：
var max=Math.max(...arr);
**sort()方法：
var max=arr.sort((a,b)=>b-a)[0];
!!sort()方法会改变数组本身

3、数组去重
var newArr=arr.reduce((prev,cur)=>prev.includes(cur)?prev:prev.push(cur),[]); //

**arr.filter()方法：
var newArr=arr.filter((item,index,arr)=>arr.indexOf(item)===index)
**new Set()方法：
var newArr=Array.from(new Set(arr));

4、数组降维
var arrB=[[1,2],[3,4],[5]];
var arrLinear=arrB.reduce((prev,cur)=>prev.concat(cur),[]) // [1,2,3,4,5]

**flat()方法：适合二以上的多维数组降重！
var arrLinear=arrB.flat();
*[0,[1],[2,3],[4,[5,6]]].flat(Inifinity) // [0,1,2,3,4,5,6]

*/
/*拓展 filter、map 语法及用法

*/
/*拓展 强制类型转换
*/