/*写一个函数，它接收一个数字参数num，返回值为不大于这个数字的所有质数之和。
传入函数的num不一定是质数。
示例：
sumPrimes(10) // 17
sumPrimes(977) // 73156
*/
//判断一个数是否为质数
function isPrime(x){
	var flag = x < 2 ? false:true;
    for(let i=2,max=Math.sqrt(x);i<=max;i++){
      if(x%i==0){
        flag=false;
        break;
      }
    }
    return flag;
}
function sumPrimes(num) {
	//下标对应数字，值表示数字是否为质数，统计值为true的下标之和
	var arr=[false,false,true];
	for(let i=arr.length;i<=num;i++){
		arr[i]=isPrime(i);
	}
	return arr.reduce((total,value,index)=>value?total+index:total,0);
}

console.log(sumPrimes(977));
