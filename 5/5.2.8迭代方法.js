//5.2.8 迭代方法
//数组.迭代方法(function(item, index, array){somecode...}, 作用域[可选])

//every() 
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
  //数组的每一项都为 true 就返回true 否则返回 false
  return (item < 5); 
})
console.log(everyResult)

//some()
var someResult = numbers.some(function(item, index, array){
  //数组中有一项为true 就返回 true
   return (item = 6);
})
console.log(someResult);

//filter()
var filterResult = numbers.filter(function(item, index, array){
  //如果为 true 则添加到新数组
  return (item >2)
})

console.log(filterResult)

//map()
var mapResult = numbers.map(function(item, index, array){
  //对数组每一项运行指定函数，并返回这个数组
  return item * 2;
})
console.log(mapResult);

//forEach()
var forEachNumbers = Array();
numbers.forEach(function(item, index, array){
  //类似于 for 循环 没有返回值
  item = item * 2;
  forEachNumbers.push(item);
})
console.log(forEachNumbers)