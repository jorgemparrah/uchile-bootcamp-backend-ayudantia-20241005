"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarUsuarioEnDB = void 0;
const persona_clase_1 = require("./persona.clase");
class BuscarUsuarioEnDB {
    constructor(dbService) {
        this.dbService = dbService;
    }
    buscar(rut) {
        this.dbService.conectarBD("SELECT * FROM personas WHERE rut = " + rut);
        return new persona_clase_1.Persona();
    }
}
exports.BuscarUsuarioEnDB = BuscarUsuarioEnDB;
//# sourceMappingURL=buscarUsuarioEnDB.clase.js.map