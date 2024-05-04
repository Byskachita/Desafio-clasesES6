// main.js
const Cliente = require('./cliente.js');
const ImpuestoAnual = require('./impuesto.js');

const cliente1 = new Cliente('Cliente A', 10000, 2000);
const impuestoAnual = new ImpuestoAnual();

console.log(`Nombre del cliente: ${cliente1.nombre}`);
console.log(`Monto total anual del cliente: ${cliente1.montoBrutoAnual}`);
console.log(`Deducciones anuales del cliente: ${cliente1.deduccionesAnuales}`);

const impuestoPagar = impuestoAnual.calcularImpuesto(cliente1.montoBrutoAnual, cliente1.deduccionesAnuales);
console.log(`Impuesto anual a pagar por el cliente: ${impuestoPagar}`);
