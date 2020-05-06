/*世界上最简单、最著名的加密方法是凯撒密码，也叫移位密码。在移位密码
中，明文中的字母按一个固定数目偏移后替换成新的字母。ROT13是一个被广
泛使用的编码技术，明文中的所有字母都向后移动 13 位。因此，'A' ↔ 'N',
 'B' ↔ 'O' 等等。
编写一个函数，用于解码一个被 ROT13 编码的字符串，返回解码后的结果。
所有解码后的字母都必须为字母大写。请不要解码非字母的字符（例如，空格
、标点符号），但你需要在结果中保留它们。
示例：
rot13("SERR PBQR PNZC") 解码 FREE CODE CAMP。
rot13("SERR CVMMN!") 解码 FREE PIZZA!。
rot13("SERR YBIR?") 解码 FREE LOVE?。
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") 解码 THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
/*  arr.map()方法处理，ASCII值超过90的减去26
function rot13(str) { 
  return str.split('').map(item=>!item.match(/[A-Z]/)?item:item.charCodeAt()+13<=90?String.fromCharCode(item.charCodeAt()+13):String.fromCharCode(item.charCodeAt()-13)).join('');
}
*/
/* str.replace()方法处理 减去A的ASCII值65，用取模法轮回  
*/
function rot13(str) {
	return str.replace(/[A-Z]/g,x=>String.fromCharCode(x.charCodeAt()%26+65));
}
/* 拓展 凯撒密码加密 反过来写就行
*/