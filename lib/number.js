exports.Number = {
  //获取s到e的随机数
  float: function (start, end) {
    if (arguments.length === 1) {
      start = 0;
      end = arguments[0];
    }

    if (typeof start !== 'number' || typeof start !== 'number') {
      throw Error ('start and end must be  numbers!');
    }

    return Math.random() * Math.abs(start - end) + start;
  },

  //获取s到e的随机length个数
  floatArr: function (start, end, length) {
    if (typeof length !== 'number') {
      throw Error ('rangeLength length must be numbers!');
    }

    var arr = [];
    for (var i = 0; i < length; i ++) {
      arr.push(this.float(start, end));
    }
    return arr;
  },

  //获取不重复的数组
  floatArrUniq: function (start, end, length) {
    if (typeof length !== 'number') {
      throw Error ('rangeLength length must be numbers!');
    }

    var arr = [];
    for (var i = 0; i < length; i++) {
      var value = this.float(start, end);
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      } else {
        i--;
      }
    }
    return arr;
  },

  //获取s到e的随机整数
  int: function (start, end) {
    return Math.floor(this.float(start, end));
  },

  //获取s到e的随机length个整数
  intArr: function (start, end, length) {
    if (typeof length !== 'number') {
      throw Error ('rangeIntLength length must be numbers!');
    }

    var arr = [];
    for (var i = 0; i < length; i ++) {
      arr.push(this.int(start, end));
    }
    return arr;
  },

  //获取s到e的随机length个整数 不重复
  intArrUniq: function (start, end, length) {
    if (typeof length !== 'number') {
      throw Error ('rangeIntLength length must be numbers!');
    }

    if (Math.floor(Math.abs(end - start)) < length) {
      throw Error ('intArrUniq length must bigger than the abs of  (start - end)!');
    }
    var arr = [];

    for (var i = 0; i < length; i ++) {
      var value = this.int(start, end);
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      } else {
        i--;
      }
    }
    return arr;
  },

  //n个长度的随机数字字符串
  intString: function(n) {
    var arr = [];
    if (typeof n !== 'number') {
      throw Error ('getNumberString n must be numbers!');
    }

    if (n <= 0) {
      throw Error ('getNumberString n must be number and greater than 0!');
    }

    for (var i = 0; i < n; i ++) {
      arr.push(this.int(0, 10));
    }

    return arr.join('');
  }
};