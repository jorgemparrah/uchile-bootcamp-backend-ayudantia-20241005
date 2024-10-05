"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boxeador = void 0;
const persona_clase_1 = require("./persona.clase");
class Boxeador extends persona_clase_1.Persona {
    constructor() {
        super(...arguments);
        this.deporte = "Boxeo";
    }
    practicar() {
        console.log('Practicando boxeo');
    }
    competir() {
        console.log('Compitiendo en boxeo');
    }
}
exports.Boxeador = Boxeador;
//# sourceMappingURL=boxeador.clase.js.map