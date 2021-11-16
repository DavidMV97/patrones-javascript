'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HolaMundo = function () {
  function HolaMundo() {
    _classCallCheck(this, HolaMundo);

    this.nombre = 'German David';
  }

  _createClass(HolaMundo, [{
    key: 'saludar',
    value: function saludar() {
      console.log('Hola mi nombre es ' + this.nombre);
    }
  }]);

  return HolaMundo;
}();

var saludo = new HolaMundo();

saludo.saludar();