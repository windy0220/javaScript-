//6.1 理解对象
var person = new Object();
person.name = 'Nick';
person.age = '26';
person.job = 'dev';

person.sayName = function(){
    console.log(this.name);
}

//字面量形式创建

var otherPerson = {
    name: "Nick",
    age: "26",
    jos: "dev",
    sayName: function(){
        console.log(this.name);
    }
};

//6.1.1 属性类型
// - 1数据属性
//修改默认属性的特性 不建议在ie8 上使用 Object.defineProperty()方法
Object.defineProperty(person, 'name',{
    configurable: false, //能否通过 delete 删除属性 默认 true 。如果设为false 之后就不能再修改为true了，调用Object.defineProperty() 修改除了writable之外的特性都会报错
    enumerable: false, //能否使用 for-in 循环返回属性 默认 true
//   writable: true, //能否修改属性的值 默认 true
    writable: false // 如果重新为该属性赋值，非严格模式会忽略，严格模式会抛出错误
//   value: 'Nick'; //属性的值
});

console.log(person.name);
person.name = 'will'; //因为 writable 为 false 所以这里改变不了 name 的值
delete person.name;
console.log(person.name);

//在使用 Object.defineProperty() 创建一个新属性时，如果不指定那么 configurable  enumerable writable 将都为 false

//- 2访问器属性

var book ={
    _year:2004,
    edition:1
};

//定义访问器属性 使用访问器属性的常见方式是设置一个属性的值会导致其他属性发生变化
Object.defineProperty(book, 'year', {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);

//6.1.2
//Object.defineProperties()方法，一次可定义多个属性 ES5

var book = {};
Object.defineProperties(book, {
    _year: { //数据属性
        writable: true,
        value: 2004
    },

    edition: { //数据属性
        writable:true,
        value:1
    },

    year:{ //访问器属性
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }

});

//6.1.3 读取属性的特性
//Object.getOwnPropertyDescriptor() 方法 对象属性有configurable enumerable get 和 set 数据属性有 configurable enumerable writable value

//数据属性
var descriptor= Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

//对象属性
var descriptor= Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(typeof descriptor.get);

//可以针对任何对象使用 Object.getOwnPropertyDescriptor 方法 包括 BOM DOM

//http://jsbin.com/wigovew/1/edit?js,console