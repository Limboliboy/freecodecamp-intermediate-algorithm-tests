/*写一个函数，找到传入的字符串里缺失的字母并返回它。判断缺失的
依据是字母顺序，abcdfg 中缺失了 e，而 abcdef 中就没有字母缺失
，此时返回undefined
示例：
fearNotLetter("abce") // "d"
fearNotLetter("abcdefghjklmno") // "i"
fearNotLetter("stvwx") // "u"
fearNotLetter("bcdf") // "e"
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined
*/
// 拓展至支持处理多个字符缺失的情况
function fearNotLetter(str) {
  var missing=[];
  str.split('').reduce((prev,cur)=>{
  	let x=cur.charCodeAt()-prev.charCodeAt()-1;
  	if(x==0){
  		return cur;
  	}
  	else{
  		for(let i=x;i>0;i--){
  			missing.push(String.fromCharCode(prev.charCodeAt()+1+x-i));
  		}
  		return cur;
  	}
  });
   return missing.length==0?undefined:missing.join('');
}

console.log(fearNotLetter("abcgi"));