(function(constructor) {
  if (constructor && constructor.prototype && !constructor.prototype.matches) {
    constructor.prototype.matches =
      constructor.prototype.matchesSelector ||
      constructor.prototype.mozMatchesSelector ||
      constructor.prototype.msMatchesSelector ||
      constructor.prototype.oMatchesSelector ||
      constructor.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }
})(global.Node || global.Element);

