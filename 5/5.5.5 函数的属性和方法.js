//5.5.5 函数的属性和方法
//属性 length 函数希望接受命名参数的个数；属性prototype 不可枚举 for-in无法发现

function sayName(name){
    return name;
}
console.log(sayName.length);

function getsum(num1, num2){
    return num1 + num2;
}
console.log(getsum.length);


//方法 apply() call() 的主要作用是能够扩充函数的作用域
function add(num1, num2){
    return num1 + num2;
}

//apply 可以传入 this, arguments 或 数组
function applySum1(num1, num2){
    return add.apply(this, arguments);
}
console.log(applySum1(10, 30));

function applySum2(num1, num2){
    return add.apply(this, [num1, num2]);
}
console.log(applySum2(10, 30));

//call 方法则直接接收参数
function callSum(num1, num2){
    return add.call(this, num1, num2);
}
console.log(callSum(10, 20));

//扩充作用域
window.color = "red";
var o = {
    color:'blue'
}

function sayColor(){
    return this.color;
}

console.log(sayColor());
console.log(sayColor.call(window));
console.log(sayColor.call(o)); //将作用于转为 o

//bind 方法 可以绑定作用域并创建一个新的函数
var newSayColor = sayColor.bind(o);
console.log(newSayColor()); //在哪里调用作用域都为o

//toLocaleString() toString() valueOf() 都将返回函数的代码
console.log(sayColor.toLocaleString());
console.log(sayColor.toString());
console.log(sayColor.valueOf());

//http://jsbin.com/kecekuf/edit?js,console