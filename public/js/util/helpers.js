Number.prototype.formatMoney = function(c, d, t) {
  var n = this,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "," : d,
      t = t == undefined ? "." : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") +
     i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
     (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

Number.prototype.ceilTo = function(nTo) {
  nTo = nTo || 10;
  return Math.ceil(this * (1 / nTo)) * nTo;
};

Handlebars.registerHelper('bothExist', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlebars Helper equal needs 2 parameters");
  if (lvalue === false && rvalue === false) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('addCommas', function(val, options) {
  var x = parseInt(val).formatMoney(0, '.', ',');
  return x;
});

Handlebars.registerHelper('toClassName', function(val, options){
  var className = val.toLowerCase();
  className = className.replace(/,/g , '').replace(/&/g, 'and').replace(/ /g, '-');
  return className;
});


String.prototype.trim = function() { return this.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); };


String.prototype.addCommas = function() {
  nStr = this;
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};
