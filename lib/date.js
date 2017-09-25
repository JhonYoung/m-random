exports.Date = {
  range: function (start, end) {
    if (start.constructor.name === 'Date' && end.constructor.name === 'Date') {
      var start = start.getTime();
      var end = end.getTime();

      var time = Math.floor(Math.random() * Math.abs(start - end) + start);

      return new Date(time);
    } 

    if (typeof start === 'string' && typeof end === 'string') {
      start = new Date( start );
      end = new Date( end );
      if (start === 'Invalid Date' || end === "Invalid Date") {
        throw Error ('Date start must be like yyyy-MM-dd format');
      }

      start = new Date(start).getTime();
      end = new Date(end).getTime();
      var time = Math.floor(Math.random() * Math.abs(start - end) + start);

      return new Date(time);
    }

    throw Error ('Date argument must be string or Date Object');
  },

  gt: function (date) {
    var end = '3000-01-01';
    return this.range(date, end)
  },

  lt: function (date) {
    var start = '1970-01-01';
    return this.range(start, date);

  }
}