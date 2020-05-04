/*写一个函数，把传入的字符串翻译成“儿童黑话”。转换规则是：把英文单词的第一个辅音字母或第一组辅音簇移到
单词结尾，并加上ay。在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音簇的意思是连续的多个辅音
字母。额外地，如果单词以元音开头的，只要在结尾加上way。传入的单词一定是英文单词，且所有字母均为小写
示例：
translatePigLatin("california") 返回 "aliforniacay"
translatePigLatin("paragraphs") 返回 "aragraphspay"
translatePigLatin("glove") 返回 "oveglay"
translatePigLatin("algorithm") 返回 "algorithmway"
translatePigLatin("eight") 返回 "eightway"
translatePigLatin("she") 返回 "eshay"
translatePigLatin("rhythm") 返回 "rhythmay"
*/
function translatePigLatin(str) {
	var firstIndex=str.search(/[aeiou]/);
	return firstIndex==0 ? str+'way' // 首字母元音直接加 way 
	: firstIndex==-1 ? str+'ay' // 一个元音都没有加 ay
	: str.substring(firstIndex)+str.substring(0,firstIndex)+'ay' //有元音移到末尾
	;
}

console.log(translatePigLatin("consonant"));

/*!!踩坑
作为原型方法一种，String.substring()居然不是驼峰命名！！！
*/