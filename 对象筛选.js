/*写一个函数，接收两个参数：第一个是对象数组，第二个是一个对象。找出与第二个参数相等或包含
第二个参数的所有对象，并以对象数组的形式返回。其中，相等的意思是原数组中的对象与第二个参数
中对象的所有键值对完全相等；包含的意思是只要第二个参数中对象的所有键存在于原数组对象
中，且它们对应的值相同即可。
示例：
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
返回 [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
返回 [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
返回 [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
返回 [{ "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
返回 [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
返回 []
*/
/* 过滤对象数组，用arr.every()方法判断每一项是否满足所有指定条件*/
function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection.filter(obj=>{
  	return srcKeys.every(key=>obj.hasOwnProperty(key)&&obj[key]==source[key]);
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
/* 注意循环结束条件
function whatIsInAName(collection, source) {
  // What's in a name?
  let srcKeys = Object.keys(source);
  return collection.filter(obj=>{
  	for(let i=0;i<srcKeys.length;i++){
  		if(!obj.hasOwnProperty(srcKeys[i])||obj[srcKeys[i]]!=source[srcKeys[i]]){
  			return false;
  		}
  	}
  	return true;
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/
/* 拓展 检查对象是否含有某个键
*/
/* 拓展 arr.every() 与 arr.some() 方法
*/