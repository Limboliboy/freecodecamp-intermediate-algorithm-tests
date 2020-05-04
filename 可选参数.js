
/*写一个求和的函数，接收的参数数量不定。若传入两个参数，返回两
数之和即可。若只传入一个参数，返回另一个函数用来接收下一个参数，
然后求出两数之和。
示例：
addTogether(2, 3) // 5

addTogether(2) // 返回一个函数，调用这个返回的函数，并给它传入另一个用于求和的值
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) // 5

addTogether("http://bit.ly/IqT6zt") // undefined

*/
// !!! 遗留问题：如何扩展对无限多参数生效 例如 addTogether(1)(2)(3)(4)(5)……

// arr.some() 方法
// 规范写法，修改条件使得短语句写在前面
function addTogether(){
	var args=Array.from(arguments);
	return args.some(item=>typeof item != 'number')
		?undefined
		:args.length>1
		?args.reduce((prev,cur)=>prev+cur)
		:x=>(typeof x != 'number' ? undefined : x+args[0]);
}
console.log(addTogether(2)(3));
/* reduce 方法
function addTogether() {
	let params=[...arguments];
	//参数合法性检查
  	return params.reduce((prev,item)=> prev && typeof item =='number',true)? 
  	params.length!=1 ? params.reduce((prev,cur)=>prev+cur) : n=> typeof n == 'number' ? n+params[0] : undefined :undefined;
  	//return false;
}
console.log(addTogether(2)([3]));*/
/* for循环
function addTogether() {
	let params=[...arguments];
	let len=params.length;
	for(let i=0;i<len;i++){
		if(typeof params[i] != 'number'){
			return undefined;
		}
	}
	if(len==1){
		return function(n){
			if(typeof n === 'number'){
				return n+params[0];
			}
			else{
				return undefined;
			}
		};
	}
	else{
		return params.reduce((prev,cur)=>prev+cur,0);
	}
}
console.log(addTogether(2)([3]));*/

/* arr.some()方法 
检测数组中的元素是否满足指定条件，只要有一个元素满足条件返回 true，剩余元素不会
执行检测；若所有元素都不满足条件，返回 false。
arr.some(function(currentValue,index,arr),thisValue)
currentValue 必选，当前元素值
index 可选，当前元素索引
arr 可选，当前元素所属的数组对象
thisValue 可选，初始值
*/
/* 拓展 接收多个参数
   arguments 对象
*/
/* 拓展 判断对象是否为数字
*/
/* 拓展 判断对象是否为字符串
*/
/* 拓展 判断对象是否为数组
*/
/* 拓展 判断对象是否为函数
*/
/* 拓展 数组对象 Array 常用方法
*/
/* 拓展 字符串对象 String 常用方法
*/
/* 拓展 对象 Object 常用方法
*/