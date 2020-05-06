/*把传入的数字转变为罗马数字，转换后的罗马数字字母必须都是大写。
示例：
convertToRoman(2)应该返回 "II"。
convertToRoman(3)应该返回 "III"。
convertToRoman(4)应该返回 "IV"。
convertToRoman(5)应该返回 "V"。
罗马数字转换规则：
I 1
v 5
X 10
L 50
C 100
D 500
M 1000
*/
/* 数字转罗马字符，从高位往低位比较，一一映射字符串
function convertToRoman(num) {
	let check=parseInt(Math.log10(num));
	let onesPlace={0:'',1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
	let tensPlace={0:'',1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC'};
	let hundredsPlace={0:'',1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM'};
	let thousandsPlace={1:'M',2:'MM',3:'MMM'};
	switch(check){
		case 0:// num 处于 1~9
			return onesPlace[num];
		case 1:
			return tensPlace[(num-num%10)/10]+onesPlace[num%10];
		case 2:
			return hundredsPlace[(num-num%100)/100]+tensPlace[(num%100-num%10)/10]+onesPlace[num%10];
		case 3:
			if((num-num%1000)/1000>3){
				return 'illegal input number';	
			}else{
				return thousandsPlace[(num-num%1000)/1000]+hundredsPlace[(num%1000-num%100)/100]+tensPlace[(num%100-num%10)/10]+onesPlace[num%10];
			}
		default:
			return 'illegal input number';
	}
}*/
/* 从高往低比较，每次比较完成num减去相应的值*/
function convertToRoman(num){
	let result='';
	let map=[{1000:'M'},{900:'CM'},{500:'D'},{400:'CD'},{100:'C'},{90:'XC'},{50:'L'},{40:'XL'},{10:'X'},{9:'IX'},{5:'V'},{4:'IV'},{1:'I'}];
	for(let i=0;i<map.length&&num>0;i++){
		// 找到最大的数位
		if (num<Object.keys(map[i])) continue;
		while(num>=Object.keys(map[i])){
			result+=Object.values(map[i]);
			num-=Object.keys(map[i]);
		}
	}
	return result;
}

/* 拓展 取对数方法
Math.log(x)/Math.log(2)
Math.log(x)/Math.log(10)
*/
/* 拓展 罗马字符转数字
   规定字符大小关系，当前字符比下一个字符小则转化为负数
function romanToNumber(str){
	let map={'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1};
	let arr=Array.from(str);
	let result=0;
	arr.reduce((prev,cur)=>{
		map[prev]<map[cur]?result-=map[prev]:result+=map[prev];
		return cur;
	});
	return result+map[arr[arr.length-1]];
}
*/
