/*写一个计算天体轨道周期的函数，接收一个对象数组参数arr，包含表示天体名称的name属性，及表示轨道半长轴的avgAlt属性，就像这样：
{name: 'name', avgAlt: avgAlt}
返回值也是一个对象数组，留原对象中的name属性和值，根据avgAlt属性的值求出
轨道周期（单位是秒），并赋值给orbitalPeriod属性。返回值中不应保留原数据中的avgAlt属性及其对应的值。
示例：
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
返回 [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
返回 [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
*/
/*function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriodArr = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]['avgAlt']){
    	orbitalPeriodArr.push(Math.round(2*3.1415926*Math.sqrt(Math.pow(earthRadius+arr[i]['avgAlt'],3)/GM)));
		delete arr[i]['avgAlt'];
		arr[i]['orbitalPeriod'] = orbitalPeriodArr[i];    	
    }
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
*/
/* arr.map() 方法
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((cur)=>{
  	cur.orbitalPeriod = Math.round(2*3.1415926*Math.sqrt(Math.pow(earthRadius+cur.avgAlt,3)/GM));
  	delete cur.avgAlt;
  	return cur;
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((cur)=>{return {name:cur.name,orbitalPeriod:Math.round(2*3.1415926*Math.sqrt(Math.pow(earthRadius+cur.avgAlt,3)/GM))}});
}
/* 拓展 数字向上取整 向下取整 四舍五入 舍弃小数
*/
/* 拓展 访问对象属性的方法
var obj={name:'fuuf',age:19};
1、 . 操作符
obj.name // fuuf
2、 [] 操作符
obj['age']  // 19
!! age 是字符串，加引号；使用变量访问时不用加引号，如下：
for(var i in obj){
	console.log(obj[i]); 
} 
 fuff 
 19
*/
