//5.3

//创建一个日期对象 自动获取当前的日期和时间
var now = new Date();
console.log(now);

//Date.parse
//根据传入日期获取时间戳（毫秒）
var time = Date.parse("2018/05/15");
console.log(time);

//Date.UTC
//同样生成时间戳（毫秒），传入的参数为 年 基于0的月 日 时 分 秒 毫秒。年月为必需的。
time = Date.UTC(2018, 0, 5, 17, 55, 55);
console.log(time);

//Date() 会模拟 Date.parse 和 Date.UTC

//Date.now() 【es5】
//返回当前时间的时间戳 （毫秒）
var start = Date.now();
console.log(start);

//使用 +new Date() 能达到 Date.now() 的效果。低版本浏览器支持
var end = +new Date();
console.log(end);

//http://jsbin.com/qutisof/edit?js,console