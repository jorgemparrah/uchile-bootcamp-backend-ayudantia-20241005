"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const persona_clase_1 = require("./clases/persona.clase");
const buscarUsuarioEnDB_clase_1 = require("./clases/buscarUsuarioEnDB.clase");
const db_service_1 = require("./services_consultas/db.service");
const api_service_1 = require("./services_consultas/api.service");
const futbolista_clase_1 = require("./clases/futbolista.clase");
const boxeador_clase_1 = require("./clases/boxeador.clase");
let AppController = class AppController {
    constructor(appService, dbService, apiService) {
        this.appService = appService;
        this.dbService = dbService;
        this.apiService = apiService;
        this.buscarUsuario = new buscarUsuarioEnDB_clase_1.BuscarUsuarioEnDB(dbService);
    }
    buscarPersona(rut) {
        const deportistas = [];
        deportistas.push(new futbolista_clase_1.Futbolista());
        deportistas.push(new boxeador_clase_1.Boxeador());
        for (let deportista of deportistas) {
            deportista.practicar();
            deportista.competir();
            if (deportista instanceof persona_clase_1.Persona) {
                deportista.pensar();
                deportista.comer();
                deportista.respirar();
            }
        }
        return this.buscarUsuario.buscar(rut);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(":rut"),
    __param(0, (0, common_1.Param)("rut")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", persona_clase_1.Persona)
], AppController.prototype, "buscarPersona", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        db_service_1.DbService,
        api_service_1.ApiService])
], AppController);
//# sourceMappingURL=app.controller.js.map