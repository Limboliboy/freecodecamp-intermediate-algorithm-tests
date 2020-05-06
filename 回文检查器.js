/* 实现一个回文检查器，若给定的一个字符串是回文，则
返回true，否则返回false。palindrome（回文），指在
忽略标点符号、大小写和空格的前提下，正着读和反着读一
模一样。
注意：检查回文时，需要先除去所有非字母数字的字符（标点、
空格和符号）并将所有字符转换成字母大写或字母小写。
我们会传入不同格式的字符串，如："racecar"、"RaceCar"、"race CAR"等等。
我们也会传入一些包含特殊符号的字符串，如"2A3*3a2"，"2A3 3a2"和"2_A3*3#A2"。
实例：
palindrome("eye") 返回 true
palindrome("_eye") 返回 true
palindrome("race car") 返回 true
palindrome("not a palindrome") 返回 false
palindrome("A man, a plan, a canal. Panama") 返回 true
palindrome("never odd or even") 返回 true
palindrome("nope") 返回 false
palindrome("almostomla") 返回 false
*/
/* 数组翻转 arr.reverse() 方法
function palindrome(str) {
	// Good luck!
  	let arr=str.toLowerCase().split(/[^a-z0-9]|\s+/g).join('').split('');
  	return arr.join('') === arr.reverse().join('');
}
console.log(palindrome("eye"));*/

/* 双指针正反向遍历判断
function palindrome(str) {
  // Good luck!
  let arr=str.toLowerCase().split(/[^a-z0-9]|\s+/g).join('').split('');
  let len=arr.length;
  for(let i=0,j=len-1;i<j;i++,j--){ // 双指针改进版，单指针 for(let i=0;i<len/2;i++){
  	if(arr[i]!=arr[j]){ 	// 利用两个指针下标和为len-1		if(arr[i]!=arr[len-i-1]){
  		return false;
  	}
  }
  return true;
}
palindrome("eye");
*/
// 反向存储字符串
function palindrome(str) {
  // Good luck!
  let temp=str.toLowerCase().split(/[^a-z0-9]|\s+/g).join('');
  let len=temp.length;
  let reverse='';
  for(let i=len-1;i>=0;i--){
  	reverse+=temp.charAt(i);
  }
  return temp===reverse;
}
