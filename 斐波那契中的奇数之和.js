/*写一个函数，参数为一个正整数num。它的作用是计算斐波那契数列中，
小于或等于num的奇数之和
示例：
sumFibs(4) // 5
sumFibs(1000) // 1785
sumFibs(75024) // 60696
sumFibs(75025) // 135721
*/
function sumFibs(num) {
	//递归法处理大数不方便，数组更灵活
	var arr=[1,1,2];
	for(let i=arr.length;arr[arr.length-1]<num;i++){
		arr[i]=arr[i-1]+arr[i-2];
	}
	return arr.reduce((total,value)=>value<=num&&value%2!==0?total+value:total);
}
console.log(sumFibs(1000));