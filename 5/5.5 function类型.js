//5.5 Function类型
//1函数的声明形式

function sum(num1, num2){
    return num1 + num2;
}

//2函数表达式
var sum2 = function(num1, num2){
    return num1 + num2;
};
//注意这里的分号

//3使用 function 构造函数 ,最后一个参数为函数体。不推荐使用
var sum3 = new Function('num1', 'num2', 'return num1 + num2');

//函数名是指针 所以一个函数可以有多个函数名
var anotherSum = sum;
//函数名不带 （）代表是指针，而不是调用。即使将 sum 设置为 null，anotherSum 依旧可正常调用

//5.5.1 没有重载
//函数名是指针，在创建第二个同名函数的时候，指针指向了第二个函数体。所以无法重载。

//5.5.2 函数声明与函数表达式
//函数声明会提前，但函数表达式不会。

//5.5.3 作为值得函数
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}

function add10(num){
    return num += 10;
}

var result1 = callSomeFunction(add10, 10); //注意这里的add10 没有() 所以不是执行
console.log(result1);

//以下函数接受一个属性名，并返回一个比较函数
function creaateComparisonFunction(propertyName){
    //return，从当前函数退出，并从那个函数返回一个值。如果返回的是一个函数，那么返回的也是函数本身。
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}

var data = [{name:"windy", age:28}, {name:"nico", age:29}, {name:"cidy", age:19}];
data.sort(creaateComparisonFunction("name"));
console.log("按照 name 排序")
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

data.sort(creaateComparisonFunction("age"));
console.log("按照 age 排序")
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);


//5.5.4函数的内部属性
//arguments.callee 为函数本身
//以下为一个阶乘函数，调用了自身进行递归，使用 arguments.callee 可与函数名解耦 不能运行在严格模式下
function factorial(num){
    if(num <= 1){
        return 1;
    }else{
        return num * arguments.callee(num - 1)
    }

}

var newFactorial = factorial; //解耦后无论引用函数时的是什么名字，都可以完成递归
console.log(newFactorial(5));

//this
window.color = "red";
var o = {color:"blue"};

function sayColor(){
    console.log(this.color);
}

sayColor(); //this 指向 window

o.sayColor = sayColor; //this 指向 o
o.sayColor();

//caller属性中保存着调用当前函数的函数的引用 【es5】

function outer(){
    inner();
}

function inner(){
    console.log(arguments.callee.caller);
}

outer();

