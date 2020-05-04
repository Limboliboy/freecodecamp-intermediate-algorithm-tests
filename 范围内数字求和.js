/*给出一个含有两个数字的数组，我们需要写一个函数，返回两个数字间所有数字
（包含这两个数字）的总和。注意，较小数不一定总出现在第一个位置。
sumAll([1, 4]) 返回 10
sumAll([4, 1]) 返回 10
sumAll([5, 10]) 返回 45
sumAll([10, 5]) 返回 45
*/
/* 数学公式法
function sumAll(arr) {
  return arr[1]>arr[0]?(arr[1]+arr[0])*(arr[1]-arr[0]+1)/2:(arr[1]+arr[0])*(arr[0]-arr[1]+1)/2;
}
console.log(sumAll([1, 4]));
*/
/* 累加法
function sumAll(arr) {
	let max=Math.max(arr[0],arr[1]);
	let min=Math.min(arr[0],arr[1]);
	let count=0;
	for(let i=min;i<=max;i++){
		count += i;
	}
	return count;
}*/
// 递归法
function sumAll([first,last]){
	// 根据首尾数字大小确定迭代方向
	const step = first - last < 0 ? 1 : -1;
	return first !== last 
	? first + sumAll([first+step,last])
	: first; 
}