/* 如果传入的字符串是一个有效的美国电话号码格式，则返回true。只要有效，用户
可以按任意方式填写表单中的电话号码。以下是一些正确的例子：
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
如果提供国家代码，则必须确认为1
示例：
telephoneCheck("1 555-555-5555")应该返回 true。
telephoneCheck("1 (555) 555-5555")应该返回 true。
telephoneCheck("5555555555")应该返回 true。
telephoneCheck("555-555-5555")应该返回 true。
telephoneCheck("(555)555-5555")应该返回 true。
telephoneCheck("1(555)555-5555")应该返回 true。
telephoneCheck("555-5555")应该返回 false。
telephoneCheck("5555555")应该返回 false。
telephoneCheck("1 555)555-5555")应该返回 false。
telephoneCheck("1 555 555 5555")应该返回 true。
telephoneCheck("1 456 789 4444")应该返回 true。
telephoneCheck("123**&!!asdf#")应该返回 false。
telephoneCheck("55555555")应该返回 false。
telephoneCheck("(6054756961)")应该返回 false。
telephoneCheck("2 (757) 622-7382")应该返回 false。
telephoneCheck("0 (757) 622-7382")应该返回 false。
telephoneCheck("-1 (757) 622-7382")应该返回 false。
telephoneCheck("2 757 622-7382")应该返回 false。
telephoneCheck("10 (757) 622-7382")应该返回 false。
telephoneCheck("27576227382")应该返回 false。
telephoneCheck("(275)76227382")应该返回 false。
telephoneCheck("2(757)6227382")应该返回 false。
telephoneCheck("2(757)622-7382")应该返回 false。
telephoneCheck("555)-555-5555")应该返回 false。
telephoneCheck("(555-555-5555")应该返回 false。
telephoneCheck("(555)5(55?)-5555")应该返回 false
*/
function telephoneCheck(str) {
  // 非法字符校验 
  if(str.match(/[^\s-()0-9]/g)){
  	return false;
  }
  //合法位数校验,合法开头、结尾校验
  let len=str.split(/[\s-()]/g).join('').length;
  if(str[str.length-1]==')'||str[0]=='-'||str[0]=='-'||len>11||len<10||len==11&&str.split(/[\s-()]/g).join('')[0]!=1){
  	return false;
  }
  if(str.match(/[()]/g)){
  	//成对（）校验，用栈来检测
	  let check=[];
	  let arr=str.match(/[()]/g);
	  if(arr.length%2==1){
	  	return false;
	  }
	  // (入栈，遇到）把（弹出栈；（必须在
	  for(let i=0;i<arr.length;i++){
	  	if(arr[i]==')'&&!check.includes('(')){
	  		return false;
	  	}
	  	else if(arr[i]==')'&&check.includes('(')){
	  		check.pop();
	  	}
	  	else{
	  		check.push(arr[i]);
	  	}
	  }
  }
  // 通过了上述所有条件则合法
  return true;
}