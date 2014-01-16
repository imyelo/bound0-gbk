(function (window, document) {
  var globals = ['_inCharset'];

  mocha.globals(globals);
  window['test-base']();
  
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
})(window, document);