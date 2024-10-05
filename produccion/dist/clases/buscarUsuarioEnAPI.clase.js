"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarUsuarioEnAPI = void 0;
const persona_clase_1 = require("./persona.clase");
class BuscarUsuarioEnAPI {
    constructor(apiService) {
        this.apiService = apiService;
    }
    buscar(rut) {
        this.apiService.buscar(`https://api.com/personas?rut=${rut}`);
        return new persona_clase_1.Persona();
    }
}
exports.BuscarUsuarioEnAPI = BuscarUsuarioEnAPI;
//# sourceMappingURL=buscarUsuarioEnAPI.clase.js.map