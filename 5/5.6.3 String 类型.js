//5.6.3 String 类型

var str = '我Hello World!';
console.log(str.length); //注意中文也是显示一个字符
console.log(str.charAt(1)); //返回指定位置的字符，从0开始
console.log(str.charCodeAt(1)); //返回字符编码
console.log(str[0]); //这样也行 IE7及之前的不行

//以下这些方法都不会改变原字符串而是建立一个新字符串
//字符串的操作方法
var result = str.concat('new'); //拼接
console.log(result);
var result = str.concat('new', 'lalalala'); //拼接多个 但还是 + 来的简单。
console.log(result);

str = 'Hello World!';
console.log(str.slice(3,7)); //从3开始 到7结束 真的是从第三个，不是从0开始
console.log(str.substring(3,7)); //从3开始 到7结束
console.log(str.substr(3,7)); //从3开始 返回7个字符。

console.log(str.slice(-3)); //从后面数3个字符，传入的字符 -3 加上 字符长度 11 等于 8 相当于 str.slice(8)
console.log(str.slice(8));
console.log(str.substr(-3)); //同slice
console.log(str.substr(8));
console.log(str.substring(-3)); //substring会将负数转换为0 字符串将全部返回

console.log(str.slice(3, -4)); //从第三个开始，到倒数第4个
console.log(str.substring(3, -4)); //substring 会把负值转成0 且会自动把小的数值当作字符开始的位置 这相当于 str.substring(0, 3)
console.log(str.substr(3, -4)); //会把第二个负值转换为0 str.substr(3, 0) 这样就返回一个长度为0的字符串，就是空了

//字符串的位置方法
console.log(str.indexOf('o'));//返回第一次出现的位置 0开始数 如果没找到返回 -1
console.log(str.lastIndexOf('o')); //从尾部开始数 返回第一次出现的位置 返回的位置数都是从头开始的数

console.log(str.indexOf('o', 6)); //第二个参数为制定位置搜索
console.log(str.lastIndexOf('o', 6));

//可以通过循环调用 indexOf 和 lastIndexOf 来找到所有子字符串
var　str1 = 'Were glad to announce that weve added a new language to our already wide list.';

var strArr = [];
var pos = str1.indexOf('e');

while(pos > -1){
    strArr.push(pos);
    pos = str1.indexOf('e', pos + 1);
}
console.log(strArr);

//trim()方法 ES5

var str = '   Hello    ';
console.log(str.trim()); //删除前后空格

//字符串大小转换
var str = 'hello world!';
console.log(str.toLocaleUpperCase()); //转为大写，地区适用，如果不知道所处的语言环境，建议使用此方法
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase()); //转为小写
console.log(str.toLowerCase());

//字符串模式匹配
var text = 'Cat, bat, sat, fat';
var pattern = /.at/;

var matches = text.match(pattern); //相当于调用了 RegExp 的 exec() 方法。 match() 只接受一个参数 正则表达式，或 RegExp 对象
console.log(matches);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

console.log(text.search(/at/)); //search 与 match 接受的参数相同，返回匹配的索引，若没有找到返回-1 只从左至右找

console.log(text.replace('at', 'ond')); //字符串替换
console.log(text.replace(/at/g, 'ond')); //使用正则替换所有匹配项

console.log(text.replace(/(.at)/g, 'word ($1)'));

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));


//split() 分割成数组
var colorText = "red,blue,green,yellow";
console.log(colorText.split(','));
console.log(colorText.split(',', 2)); //只生成两个
console.log(colorText.split(/[^\,]+/));

//localeCompare() 方法
var stringValue = 'yellow';
console.log(stringValue.localeCompare('brick')); //brick 在字母表中 排在 yellow 前面 返回 1
console.log(stringValue.localeCompare('yellow')); //相等 返回0
console.log(stringValue.localeCompare('zoo')); //排在后面返回 -1

function determineOrder(value){
    var result = stringValue.localeCompare(value);
    if(result < 0){
        console.log("The string 'yellow' comes before the string '" + value + "'.");
    } else if(result > 0){
        console.log("The string 'yellow' comes after the string '" + value + "'.");
    } else {
        console.log("The string 'yellow' comes eaual the string '" + value + "'.");
    }
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");

//fromCharCode 接受一个或多个字符编码转换成字符串 与 charCodeAt() 执行相反的操作
console.log(String.fromCharCode(104,101,108,108,111));

//Html 方法 略不建议用


