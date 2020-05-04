/*写一个函数，为 DNA 中的碱基配对。这个函数只接收一个表示碱基的字符串为
参数，最后返回完成配对的二维数组。配对原则是：A 与 T 配对，C 与 G 配对。
示例：
pairElement("ATCGA")返回[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]。
pairElement("TTGAG")返回[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]。
pairElement("CTCTA")返回[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]。
*/
// 用一个对象存储映射规则
function pairElement(str) {
	let pairs={'A':'T','T':'A','G':'C','C':'G'};
  	return str.split('').map(item=>[item,pairs[item]]);
}

console.log(pairElement("GCG"));