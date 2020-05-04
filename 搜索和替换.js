/*写一个字符串的搜索与替换函数，返回值为完成替换后的新字符串。接收的第一个
参数为待替换的句子，第二个为句中需要被替换的单词，第三个为替换后的单词。
注意：需要保留被替换单词首字母的大小写格式。
即如果传入的第二个参数为 "Book"，第三个为 "dog"，替换后的结果为 "Dog"
示例：
myReplace("Let us go to the store", "store", "mall") 返回 "Let us go to the mall"。
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 返回 "He is Sitting on the couch"。
myReplace("This has a spellngi error", "spellngi", "spelling") 返回 "This has a spelling error"。
myReplace("His name is Tom", "Tom", "john") 返回 "His name is John"。
myReplace("Let us get back to more Coding", "Coding", "algorithms") 返回 "Let us get back to more Algorithms"。
*/
function myReplace(str, before, after) {
  // 检测首字母是否大写，after默认首字母小写
  if(before[0]===before[0].toUpperCase()){
  	after=after[0].toUpperCase()+after.slice(1);
  }
  return str.replace(before,after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));