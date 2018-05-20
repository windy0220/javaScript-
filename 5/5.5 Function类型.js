//5.5 Function类型
//1函数的声明形式
function sum(num1, num2){
    return num1 + num2;
}

//2函数表达式
var sum = function(num1, num2){
    return num1 + num2;
};//注意这里的分号

//3使用 function 构造函数 ,最后一个参数为函数体。不推荐使用
var sum = new Function('num1', 'num2', 'return num1 + num2');

//函数名是指针 所以一个函数可以有多个函数名
var anotherSum = sum;
//函数名不带 （）代表是指针，而不是调用。即使将 sum 设置为 null，anotherSum 依旧可正常调用

//5.5.1 没有重载
//函数名是指针，在创建第二个同名函数的时候，指针指向了第二个函数体。所以无法重载。

//5.5.2 函数声明与函数表达式
//函数声明会提前，但函数表达式不会。

//5.5.3 作为值得函数
