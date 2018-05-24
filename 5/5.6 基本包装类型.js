//5.6基本包装类型

//3 个特殊的引用 类型 Boolean Number String ,读取基本类型的值是，会创建一个基本包装类型的对象，便于调用一些方法来操作这些数据，执行完成之后便被销毁。
var s1 = 'some text';
console.log(typeof(s1));

var s2 = s1.substring(2);
//这里相当于执行了 var s1 = new String('some text');s2 = s1.substring(2); s1 = null
//执行完成之后就变成了基本数据类型，不能再添加属性和方法。

s1.color = 'red';
console.log(s1.color); //undefined

//Object 会根据传入的值不同返回相应的基本包装类型实例 不建议这么干，因为会分不清是基本类型还是引用类型。
var obj = new Object('new text');
console.log(obj);
var obj = new Object('123');
console.log(obj);
var obj = new Object('ture');
console.log(obj);

//与转型函数不同，基本包装类型实例是个 object 转型函数会是基本数据类型
var s1 = '123';
var s2 = Number(s1);
console.log(typeof(s2));

//5.6.1 Boolean 类型
//不要使用 Boolean 对象

var falseObject = new Boolean(false); //创建 Boolean 对象
var falseValue = false;
console.log(falseObject instanceof Boolean);//表达式中所有的对象都会被转为 true 所以这里是 true
console.log(falseValue instanceof Boolean);


//5.6.2 Number
var numberObject = new Number(10);// 创建 Number 对象 (引用类型)

var num = 10;
console.log(num.toString());
console.log(num.toString(2)); //2进制
console.log(num.toFixed(2)); //补小数0
var num = 10.005;
console.log(num.toFixed(2)); //自动舍位
console.log(num.toExponential(1)); //指数表示法
console.log(num.toPrecision(1)); //这个方法厉害了，可以根据位数要求，自动调用 toFixed 或 toExponential

//http://jsbin.com/soveduy/edit?js,console
