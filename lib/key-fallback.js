
var fallback = function(keyname) {
  for (iobj = 1; iobj < arguments.length; iobj++)
  {
    var obj = arguments[iobj];
    if (obj && typeof obj === 'object')
    {
      var val = obj[keyname];
      if (typeof val !== "undefined")
      {
        return val;
      }
    }
  }
}

module.exports = fallback;

