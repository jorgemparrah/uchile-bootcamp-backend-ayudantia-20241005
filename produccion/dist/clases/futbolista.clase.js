"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Futbolista = void 0;
const persona_clase_1 = require("./persona.clase");
class Futbolista extends persona_clase_1.Persona {
    constructor() {
        super(...arguments);
        this.deporte = "Fútbol";
    }
    practicar() {
        console.log('Practicando fútbol');
    }
    competir() {
        console.log('Compitiendo en fútbol');
    }
    respirar() {
        console.log('Respirando como futbolista');
    }
}
exports.Futbolista = Futbolista;
//# sourceMappingURL=futbolista.clase.js.map