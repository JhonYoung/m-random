# m-random 是一个用户随机生成数字，或者字符串，或者 Date的库


## API
- - -
### Number 随机生成数字
- - -
1. ```MRandom.Number.float(start, end)```
params: start: Number, end: Number
返回一个start 到 end 的浮点数
2. ```MRandom.Number.floatArr(start, end)```
params: start: Number, end: Number, length: Number
返回length 个start 到 end 的浮点数组成的数组
3. ```MRandom.Number.floatArrUniq(start, end, length)```
params: start: Number, end: Number, length: Number
返回length 个start 到 end 的浮点数组成的数组，且不包含重复项
4. ```MRandom.Number.int(start, end, length)```
params: start: Number, end: Number
返回一个start 到 end 的整数
5. ```MRandom.Number.intArr(start, end, length)```
params: start: Number, end: Number, length: Number
返回length个start 到 end 的整数组成的数组
6. ```MRandom.Number.intArrUniq(start, end, length)```
params: start: Number, end: Number, length: Number
返回length个start 到 end 的整数组成的数组，且不包含重复项
7. ```MRandom.Number.intString(length)```
params: length: Number
返回length个随机整数组成的字符串
- - -
### Sring 随机生成字符串
- - -
1. ```MRandom.String.id(length)```
params: length: Number
返回一个length长度的字符串，如果未传入，则默认17位字符串
2. ```MRandom.String.idIndex(length, index)```
params: length: Number, index: Number
返回一个length长度的字符加上序号的字符串组成的数组
3. ```MRandom.String.idStartWith(length, str)```
params: length: Number, str: String
返回一个length长度的字符, 并且以str开头
4. ```MRandom.String.idEndWith(length, str)```
params: length: Number, str: String
返回一个length长度的字符, 并且以str结尾
5. ```MRandom.String.idWithoutNumber(length)```
params: length: Number
返回一个length长度的字符, 并且不包含数字
- - -
### Date 随机生成日期
- - -
1. ```MRandom.Date.range(start, end)```
params: start: Number or Date, end: String or Date
返回一个start 到 end 的时间对象
2. ```MRandom.Date.gt(date)```
params: date: Number or Date
返回一个大于 date 的时间对象
3. ```MRandom.Date.lt(date)```
params: date: Number or Date
返回一个小于 date 的时间对象


