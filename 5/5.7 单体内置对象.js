//5.7 单体内置对象
//Global 是一个兜底的终极对象
//URI 编码方法
var uri = "http://www.wrox.com/illegal value.html#start";
console.log(encodeURI(uri)); //对应 decodeURI 只会替换空格
console.log(encodeURIComponent(uri)); //通常使用这个方法 对应 decodeURIComponent 替换所有非字母数字字符

var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.html%23start";
console.log(decodeURIComponent(uri));

//eval()方法 会将传入的参数当作实际的 ECMAScript 语句来解析 eval中创建的变量或方法都不会提升，该方法严格模式下不可用。
var msg = 'Hello World!';
eval(console.log(msg));

//Global 对象的属性
// window 对象 javascript 除了扮演 ECMAScript 规定的 Global 对象的角色外，还承担了别的任务
var global = function(){
    return this;
}()

//5.7.2 Math 对象
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.PI);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

var max = Math.max(3,54,32,16); //一组数值中的最大值
console.log(max)
var min = Math.min(3,54,32,16); //一组数值中的最小值
console.log(min)

var values = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math, values);
console.log(max);

console.log(Math.ceil(25.9)); //执行向上舍入
console.log(Math.ceil(25.5));
console.log(Math.ceil(25.1));

console.log(Math.round(25.9)); //标准舍入 四舍五入
console.log(Math.round(25.5));
console.log(Math.round(25.4));

console.log(Math.floor(25.9)); //向下舍入
console.log(Math.floor(25.5));
console.log(Math.floor(25.4));

console.log(Math.random()); //生成0和1之间的随机数

var randomNum = Math.floor(Math.random()*100+1);
console.log(randomNum); //生成1到100中的随机数

//随机值函数

function getRandomNum(minNum, maxNum){
    var q = maxNum - minNum + 1; //计算随机数可能值的数量
    return Math.floor(Math.random() * q + minNum);
}

console.log(getRandomNum(1,10)); //取1到10的随机数
