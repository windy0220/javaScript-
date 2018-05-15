//5.3.1 继承的方法
//Date 的 toLocaleString() toString() valueOf()
var time = new Date().toLocaleString();
console.log(time);
time = new Date().toString();
console.log(time);
time = new Date().valueOf();
console.log(time);


var date1 = new Date("2018/5/15");
var date2 = new Date("2017/5/15");
console.log(date1 > date2);

//5.3.2 日期格式化方法
time = new Date().toDateString();
console.log(time);

time = new Date().toTimeString();
console.log(time);

time = new Date().toLocaleDateString();
console.log(time);

time = new Date().toLocaleTimeString();
console.log(time);

time = new Date().toUTCString();
console.log(time);

//5.3.3 日期/时间组件方法
// get方法 getUTC方法 set方法
// getTime()
// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()


//http://jsbin.com/qozikaz/edit?js,console