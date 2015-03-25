module.exports = function(source) {
  var loaderUtils, hamlc, query, result;
  this.cacheable && this.cacheable(true);
  loaderUtils = require("loader-utils");
  hamlc = require("haml-coffee");
  query = loaderUtils.parseQuery(this.query);
  result = hamlc.render(source, query, {escapeHtml: false});
  return "module.exports = " + JSON.stringify(result) + ";";
};
