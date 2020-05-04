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
