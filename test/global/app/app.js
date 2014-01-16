(function (window, document) {
  var globals = ['ec_GBK', 'UnicodeToAnsi', 'dc_GBK'];

  mocha.globals(globals);
  window['test-base']();
  
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
})(window, document);