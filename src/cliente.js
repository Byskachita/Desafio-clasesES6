// cliente.js
export default class Cliente {
    constructor(nombre, montoBrutoAnual, deduccionesAnuales) {
      this._nombre = nombre;
      this._montoBrutoAnual = montoBrutoAnual;
      this._deduccionesAnuales = deduccionesAnuales;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
      this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }
  
    get deduccionesAnuales() {
      return this._deduccionesAnuales;
    }
  
    set deduccionesAnuales(nuevasDeduccionesAnuales) {
      this._deduccionesAnuales = nuevasDeduccionesAnuales;
    }
  }
  