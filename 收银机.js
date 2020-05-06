/* 编写一个用于收银机的函数checkCashRegister()，传入售价为第一个参数（price）、支付金额为第二个参数（cash）、收银机內的金额为
第三个参数（cid）。cid是包含货币面值的二维数组，返回是含有status键值和change键值的对象。如果收银机內的金额少于应找回的零钱数，
或者无法返回确切的数目时，返回{status: "INSUFFICIENT_FUNDS", change: []}。如果收银机內的金额等于应找回的零钱数，返回
{status: "CLOSED", change: [...]}，其中change键值是收银机內的金额。否则，返回{status: "OPEN", change: [...]}，其中
change键值是应找回的零钱数，并且它的面值由高到低排序。

货币单位	面值
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

示例：
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
返回{status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
返回{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
返回{status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
返回{status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
返回{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
*/
function checkCashRegister(price, cash, cid) {
  // 结果
  let result={status:'',change:[]};
  // 找零
  let change=cash-price;
  // 货币面值映射关系
  let map=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  // 收银机的钱刚好等于找零
  let add=0;
  cid.forEach((item,index,arr)=>{
  	add=(add*1000+item[1]*1000)/1000;
  	return arr[index+1];
  });
  if(add==change){
  	return {status:'CLOSED',change:cid};
  }
  // 收银机的钱不等于找零，逐一排查
  for(let i=map.length-1;i>=0&&change>0;i--){
  	let kind=cid[i][0]; // 纸币的种类
  	let x=map[i][1]; // 纸币的面值
  	let y=cid[i][1]; // 收银机内某纸币对应的总金额
  	if(x>change||x<=change&&y==0) continue;
  	while(x<=change){ // 找到最接近找零的面值
  		if(y==change){ // 该面值的钱的总数刚好等于找零，直接返回
  			result.status='OPEN';
  			result.change.push(cid[i]);
  			return result;
  		}
  		else if(y>change){ // 该面值的钱的总数大于找零
  			if(change%x==0){ // 找零刚好是该面值的倍数，直接
  				result.status='OPEN';
  				result.change.push([kind,change]);
  				return result;
  			}
  			else { // 该面值不能完全找零，能找的最大金额入栈，让指针向下一个面值移动
  				result.change.push([kind,change-change%x]);
  				change=change*1000%(x*1000)/1000;
  				break;
  			}
  		}
  		else{ // 该面值的钱的总数小于找零,能找的最大金额入栈，让指针向下一个面值移动
  			result.change.push(cid[i]);
  			change=(change*1000-y*1000)/1000;
  			break;
  		}
  	}
  }
  // 收银机的钱比找零少，或者无法找回确切的数目
  result.status='INSUFFICIENT_FUNDS';
  result.change=[];
  return result;
}