/*写一个构造器（constructor）函数，只接收一个字符串参数firstAndLast，代表一个英文名的全名（姓和名）。
这个构造函数创建出的实例需要具有以下方法：
getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
这些方法可以通过构造函数创建出的实例调用
示例：
Object.keys(bob).length 返回 6
bob instanceof Person 返回 true
bob.firstName 返回 undefined
bob.lastName 返回 undefined
bob.getFirstName() 返回 "Bob"
bob.getLastName() 返回 "Ross"
bob.getFullName() 返回 "Bob Ross"
调用bob.setFirstName("Haskell")后，bob.getFullName() 返回 "Haskell Ross"
调用bob.setLastName("Curry")后，bob.getFullName() 返回 "Haskell Curry"
调用bob.setFullName("Haskell Curry")后，bob.getFullName() 返回 "Haskell Curry"
调用bob.setFullName("Haskell Curry")后，bob.getFirstName() 返回 "Haskell"
调用bob.setFullName("Haskell Curry")后，bob.getLastName() 返回 "Curry"
*/
var Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
  	return firstAndLast.split(' ')[0];
  }
  this.getLastName = function() {
  	return firstAndLast.split(' ')[1]; 
  }
  this.setFirstName = function(x) {
  	firstAndLast=firstAndLast.replace(firstAndLast.split(' ')[0],x);
  }
  this.setLastName = function(x) {
  	firstAndLast=firstAndLast.replace(firstAndLast.split(' ')[1],x);
  }
  this.setFullName = function(x) {
  	firstAndLast=x;
  }
  
  return firstAndLast;
};
var bob = new Person('Bob Ross');

/* 拓展 公有变量 私有变量 公有方法 私有方法 静态变量 静态方法 

*/