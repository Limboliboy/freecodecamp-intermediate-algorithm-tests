/*写一个叫destroyer的函数，第一个参数是数组，称为初始数组。后续的参数数量是不确定的，
可能有一个或多个。你要从初始数组中移除所有与后续参数相等的元素，并返回移除后的数组
注意：你可以使用arguments对象，也可以使用...，即“剩余参数”（Rest Parameters）语法
示例：
destroyer([1, 2, 3, 1, 2, 3], 2, 3) 返回 [1, 1]。
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) 返回 [1, 5, 1]。
destroyer([3, 5, 1, 2, 2], 2, 3, 5) 返回 [1]。
destroyer([2, 3, 2, 3], 2, 3) 返回 []。
destroyer(["tree", "hamburger", 53], "tree", 53) 返回 ["hamburger"]。
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
返回 [12,92,65]。
*/
/* arr.filter()过滤方法
function destroyer(arr) {
  // 删掉那些值
  let restParams=[...arguments].slice(1);
  return arr.filter(item=>!restParams.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
/*function destroyer(arr) {
  let restParams=Array.prototype.slice.call(arguments,1);
  return arr.filter(item=>restParams.indexOf(item)<0);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/
function destroyer(arr) {
	//包含所有参数的数组
	let params=[...arguments].slice(1);
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<params.length;j++){
			if (arr[i]==params[j]){
				delete arr[i];
			}
		}
	}
	return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
/* 拓展 具有length属性的类数组转换成数组方法：
Array.prototype.slice.call(obj);
Array.from(obj);
*/
