"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// main.js

var cliente1 = new _cliente["default"]('Cliente A', 10000, 2000);
var impuestoAnual = new _impuesto["default"]();
console.log("Nombre del cliente: ".concat(cliente1.nombre));
console.log("Monto total anual del cliente: ".concat(cliente1.montoBrutoAnual));
console.log("Deducciones anuales del cliente: ".concat(cliente1.deduccionesAnuales));
var impuestoPagar = impuestoAnual.calcularImpuesto(cliente1.montoBrutoAnual, cliente1.deduccionesAnuales);
console.log("Impuesto anual a pagar por el cliente: ".concat(impuestoPagar));