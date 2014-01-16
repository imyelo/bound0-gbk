;(function (name, definition) {
  // this is considered "safe":
  var hasDefine = typeof define === 'function',
    // hasDefine = typeof define === 'function',
    hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else if (hasExports) {
    // Node.js Module
    module.exports = definition();
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('test-base', function (require, exports, module) {
  return function () {
    describe('use case', function () {
      it('encode', function () {
        expect(ec_GBK('中')).to.be.equal('%d6%d0');
        expect(ec_GBK('文')).to.be.equal('%ce%c4');
      });
      it('decode', function () {
        expect(dc_GBK('%d6%d0')).to.be.equal('中');
        expect(dc_GBK('%ce%c4')).to.be.equal('文');
      });
      // describe('long text', function () {
      //   var text = '镜子中看见一张陌生的脸' + '\n' +
      //                 '那眼神如此黯淡 ' + '\n' +
      //                 '笑一笑只牵动苦涩的嘴角' + '\n' +
      //                 '我的寂寞谁知道 ' + '\n' +
      //                 '' + '\n' +
      //                 '像条船在海上飘' + '\n' +
      //                 '北斗星也看不到 ' + '\n' +
      //                 '谁能够扬起了帆' + '\n' +
      //                 '远远离开这黑潮 ' + '\n' +
      //                 '' + '\n' +
      //                 'angel angel 盼望你在我身边 ' + '\n' +
      //                 'angel angel 请你紧紧抓住我的手 ' + '\n' +
      //                 '' + '\n' +
      //                 '有时候我想不会有人了解' + '\n' +
      //                 '心里面藏著的痛 ' + '\n' +
      //                 '我害怕用真心面对这世界' + '\n' +
      //                 '只好越来越沉默 ' + '\n' +
      //                 '' + '\n' +
      //                 '一个人在人海漂' + '\n' +
      //                 '说话的人找不到 ' + '\n' +
      //                 '谁给我温柔(拥抱我)拥抱' + '\n' +
      //                 '当我感觉心快要碎了 ' + '\n' +
      //                 '' + '\n' +
      //                 'angel angel 盼望你在我身边 ' + '\n' +
      //                 'angel angel 是否听见我在呼唤你 ' + '\n' +
      //                 '' + '\n' +
      //                 '能不能告诉孤单疲惫的我你永远为我守候 ' + '\n' +
      //                 'angel angel 请你留在我的身边 ' + '\n' +
      //                 'angel angel 请你不要放开我的手';
      //   var textGBK = '%BE%B5%D7%D3%D6%D0%BF%B4%BC%FB%D2%BB%D5%C5%C4%B0%C9%FA%B5%C4%C1%B3%0D%0A%C4%C7%D1%DB%C9%F1%C8%E7%B4%CB%F7%F6%B5%AD+%0D%0A%D0%A6%D2%BB%D0%A6%D6%BB%C7%A3%B6%AF%BF%E0%C9%AC%B5%C4%D7%EC%BD%C7%0D%0A%CE%D2%B5%C4%BC%C5%C4%AF%CB%AD%D6%AA%B5%C0+%0D%0A%0D%0A%CF%F1%CC%F5%B4%AC%D4%DA%BA%A3%C9%CF%C6%AE%0D%0A%B1%B1%B6%B7%D0%C7%D2%B2%BF%B4%B2%BB%B5%BD+%0D%0A%CB%AD%C4%DC%B9%BB%D1%EF%C6%F0%C1%CB%B7%AB%0D%0A%D4%B6%D4%B6%C0%EB%BF%AA%D5%E2%BA%DA%B3%B1+%0D%0A%0D%0Aangel+angel+%C5%CE%CD%FB%C4%E3%D4%DA%CE%D2%C9%ED%B1%DF+%0D%0Aangel+angel+%C7%EB%C4%E3%BD%F4%BD%F4%D7%A5%D7%A1%CE%D2%B5%C4%CA%D6+%0D%0A%0D%0A%D3%D0%CA%B1%BA%F2%CE%D2%CF%EB%B2%BB%BB%E1%D3%D0%C8%CB%C1%CB%BD%E2%0D%0A%D0%C4%C0%EF%C3%E6%B2%D8%D6%F8%B5%C4%CD%B4+%0D%0A%CE%D2%BA%A6%C5%C2%D3%C3%D5%E6%D0%C4%C3%E6%B6%D4%D5%E2%CA%C0%BD%E7%0D%0A%D6%BB%BA%C3%D4%BD%C0%B4%D4%BD%B3%C1%C4%AC+%0D%0A%0D%0A%D2%BB%B8%F6%C8%CB%D4%DA%C8%CB%BA%A3%C6%AF%0D%0A%CB%B5%BB%B0%B5%C4%C8%CB%D5%D2%B2%BB%B5%BD+%0D%0A%CB%AD%B8%F8%CE%D2%CE%C2%C8%E1%28%D3%B5%B1%A7%CE%D2%29%D3%B5%B1%A7%0D%0A%B5%B1%CE%D2%B8%D0%BE%F5%D0%C4%BF%EC%D2%AA%CB%E9%C1%CB+%0D%0A%0D%0Aangel+angel+%C5%CE%CD%FB%C4%E3%D4%DA%CE%D2%C9%ED%B1%DF+%0D%0Aangel+angel+%CA%C7%B7%F1%CC%FD%BC%FB%CE%D2%D4%DA%BA%F4%BB%BD%C4%E3+%0D%0A%0D%0A%C4%DC%B2%BB%C4%DC%B8%E6%CB%DF%B9%C2%B5%A5%C6%A3%B1%B9%B5%C4%CE%D2%C4%E3%D3%C0%D4%B6%CE%AA%CE%D2%CA%D8%BA%F2+%0D%0Aangel+angel+%C7%EB%C4%E3%C1%F4%D4%DA%CE%D2%B5%C4%C9%ED%B1%DF+%0D%0Aangel+angel+%C7%EB%C4%E3%B2%BB%D2%AA%B7%C5%BF%AA%CE%D2%B5%C4%CA%D6';
      //   it('simple case', function (done) {
      //     inCharset.get(text, 'gbk', function (str) {
      //       expect(str).to.be.equal(textGBK);
      //       done();
      //     });
      //   });
      //   it('double length', function (done) {
      //     inCharset.get(text + text, 'gbk', function (str) {
      //       expect(str).to.be.equal(textGBK + textGBK);
      //       done();
      //     });
      //   });
      //   it('x99 length', function (done) {
      //     var multi = function (input, length) {
      //       var str, i;
      //       str = '';
      //       for (i = 0, length; i < length; i++) {
      //         str += input;
      //       }
      //       return str;
      //     };
      //     inCharset.get(multi(text, 99), 'gbk', function (str) {
      //       expect(str).to.be.equal(multi(textGBK, 99));
      //       done();
      //     });
      //   });
      // });
    });
  };
});