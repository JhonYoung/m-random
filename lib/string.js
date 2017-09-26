
exports.String = {
  //生成length 长度的id
  id: function (length) {
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    var chars = [];
    var maxPos = $chars.length + 1;

    length = parseInt(length) || 17;
    if (length <= 0) {
      throw Error ('length and end must be  numbers and greater than 0!');
    }
    for (var i = 0; i < length; i ++) {
      var charStr = $chars.charAt(Math.floor(Math.random() * maxPos));
      chars.push(charStr)
    }

    return chars.join('');
  },

  //生成length长度的id, 并返回 index的结尾
  idIndex: function (length, index) {
    var id = this.id(length);
    var arr = [];

    if ( typeof index !== 'number' || index <= 0) {
      throw Error ('idIndex argument index  must be  numbers and greater than 0!');
    }
    for (var i = 0; i < index; i ++) {
      idIndex = id + '_' + i;
      arr.push(idIndex);
    }

    return arr;
  },

  //以str开头的字符串
  idStartWith: function (length, str) {
    if (typeof str !== "string" || length <= str.length) {
      throw Error ('idStartWith str.length must be numbers and smaller than length!');
    }

    length = length - str.length;
    return str + this.id(length);
  },

  //以str结尾
  idEndWith: function (length, str) {
    if (typeof str !== "string" || length <= str.length) {
      throw Error ('idStartWith str.length must be numbers and smaller than length!');
    }

    length = length - str.length;
    return this.id(length) + str;
  },

  //不包含数字
  idWithoutNumber: function (length) {
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
    var chars = [];
    var maxPos = $chars.length + 1;

    length = parseInt(length) || 17;
    if (length <= 0) {
      throw Error ('length and end must be  numbers and greater than 0!');
    }
    for (var i = 0; i < length; i ++) {
      var charStr = $chars.charAt(Math.floor(Math.random() * maxPos));
      chars.push(charStr)
    }

    return chars.join('');
  } 
}