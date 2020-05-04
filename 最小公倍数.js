/*写一个函数，它接收一个包含两个数字的数组参数arr，返回值为这两个数字范围内所有数字
（包含这两个数字）的最小公倍数，较小数不一定总是出现在数组的第一个元素。
例子：
smallestCommons([1,3]);// 6
smallestCommons([1,5]);// 60
smallestCommons([5,1]);// 60
smallestCommons([2,10]);// 2520
smallestCommons([1,13]);// 360360
smallestCommons([23,18]);// 6056820
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
//把一个数按质因数分解
function breakIntoPrimes(y){
	//基数排序，记录合数的分解结果
	var tmpArr=new Array(y-1).fill(0);
	for(let i=2;i<=y;i++){
		while(y%i==0){
			tmpArr[i]+=1;
			y/=i;
		}
	}
	return tmpArr;
}
//计算数字范围内所有数字最小公倍数
function smallestCommons(arr){
	if(arr[0]>arr[1]){
		let tmp=arr[0];
		arr[0]=arr[1];
		arr[1]=tmp;
	}
	var len=arr[1]-arr[0]+1;
	var x;
	//基数排序，下标的值是数量
	var currentArr=new Array(arr[1]+1).fill(0);
	for(let i=0;i<len;i++){
		x=arr[0]+i;
		if(isPrime(x)){
			currentArr[x]+=1;//x是质数，出现次数加1
		}
		//不是质数
		else{
			let tmpArr=breakIntoPrimes(x);
			for(let j=0;j<tmpArr.length;j++){
				if(tmpArr[j]||currentArr[j]){
					if(tmpArr[j]>currentArr[j]){
						currentArr[j]=tmpArr[j];
					}
				}
			}
		}
		x++;
	}
	return currentArr.reduce((total,value,index)=> value ? total*Math.pow(index,value) : total,1);
}

console.log(smallestCommons([23,18]));