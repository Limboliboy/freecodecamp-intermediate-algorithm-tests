/*写一个函数，接收两个参数分别是对象数组collection及字符串pre，代表对象的一个键（key）
检查对象数组中每个对象的pre属性对应的值，是否都为 “真”（truthy）。如果是，则返回true，否则返回false。
JavaScript 中，如果一个值在 Boolean 的上下文中（比如if语句）可以被执行为true，那么这个值就被认为是truthy的。
示例：
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
返回true
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
返回false
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")
返回false
truthCheck([{"single": "yes"}], "single")
返回true
*/
function truthCheck(collection, pre) {
  // 每个都是真的吗？
  return collection.reduce((prev,cur)=>prev&&Boolean(cur[pre]),true);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));