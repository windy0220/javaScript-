//5.2.9 归并方法
//数组.归并方法(function(前一个值, 当前值, 索引, 数组对象))

//reduce 从左至右归并
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function(prev, cur, index, array){
  return prev + cur;
})
console.log(sum);

//reduceRight 从右至左归并
var sum2 = values.reduceRight(function(prev, cur, index, array){
  return prev - cur;
})
console.log(sum2)