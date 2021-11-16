'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carro = function () {
	function Carro() {
		_classCallCheck(this, Carro);
	}

	_createClass(Carro, [{
		key: 'prender',
		value: function prender() {
			console.log('El carro esta encendido');
		}
	}, {
		key: 'apagar',
		value: function apagar() {
			console.log('El carro esta apagado');
		}
	}]);

	return Carro;
}();

var carro = new Carro();

carro.apagar();
carro.prender();