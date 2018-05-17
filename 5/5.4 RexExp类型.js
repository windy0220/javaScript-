//5.4 RegExp 类型

//字面量模式
var reg = /cat/g

//RegExp 构造函数模式
var regP = RegExp("cat", "g")

// 第一个参数为正则表达式，第二个参数为模式 g全局，找到一个后停止 i不区分大小写 m多行找出所有


//ES5 规定字面量模式和直接调用 RegExp 一样了。所以下面的结果在支持es5的浏览器上效果也一样。
for(var i=0; i<2; i++){
  re = /cat/g
  console.log(re.test("cataastrophe"));
}

for(var i=0; i<2; i++){
  re = RegExp("cat", "g")
  console.log(re.test("cataastrophe"));
}

//5.4.1 RegExp 实例属性
//这些属性没啥用


//5.4.2 RegExp 实例方法
var text = "Today is Good Day!";
var Reg = RegExp("Day", "gi");

//exec 方法返回一个数组
var result = Reg.exec(text);
console.log(result);
console.log(result.index); //匹配项在字符串中的位置
console.log(result.input); //应用正则表达式的字符串
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(text.lastIndex);


//test 返回布尔值
console.log(Reg.test(text))

//5.4.3 构造函数属性
var text = "this has been a short summer";
var pattern = /(.)hort/gm; //使用 () 可分捕获组

if(pattern.test(text)){
  console.log(RegExp.input); //原字符串 短属性 //短属性 $_
  console.log(RegExp.leftContext); //匹配之前 //短属性 $`
  console.log(RegExp.rightContext); //匹配之后 //短属性 $'
  console.log(RegExp.lastMatch); //最后一次匹配项 //短属性 $&
  console.log(RegExp.lastParen); //最近一次匹配捕获组 //短属性 $+
  console.log(RegExp.multiline); //布尔值，是否所有表达式都使用多行模式 //段属性 $*
}


//储存捕获组 RegExp.$1 至 RegExp.$9
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;

if(pattern.test(text)){
  console.log(RegExp.$1);
  console.log(RegExp.$2);
}

//http://jsbin.com/zarakah/edit?js,console