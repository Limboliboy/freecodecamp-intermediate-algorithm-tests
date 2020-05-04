/*写一个函数，把一个字符串转换为“短线连接格式”。即所有字母都是小写，且用-连接。
示例：
spinalCase("This Is Spinal Tap") 返回 "this-is-spinal-tap"
spinalCase("thisIsSpinalTap") 返回 "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show") 返回 "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh") 返回 "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things") 返回 "all-the-small-things"
*/
/* 捕获组方法
function spinalCase(str) { 
	return str.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/\s+|_+/g,"-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
*/
// 非捕获组方法
function spinalCase(str) {
	return str.split(/\s+|_+|(?=[A-Z])/).join('-').toLowerCase();
}
spinalCase('This Is Spinal Tap');

/* 拓展 捕获组与非捕获组
*/