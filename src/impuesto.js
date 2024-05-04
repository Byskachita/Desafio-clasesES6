// impuesto.js
export default class ImpuestoAnual {
    constructor() {
      this._porcentajeImpuesto = 0.21; // 21%
    }
  
    calcularImpuesto(montoBrutoAnual, deduccionesAnuales) {
      return (montoBrutoAnual - deduccionesAnuales) * this._porcentajeImpuesto;
    }
  }
  