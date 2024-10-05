import { ApiService } from "src/services_consultas/api.service";
import { Persona } from "./persona.clase";
import { BuscarUsuarioInterface } from "src/interfaces/buscarUsuario.interface";
export declare class BuscarUsuarioEnAPI implements BuscarUsuarioInterface {
    apiService: ApiService;
    constructor(apiService: ApiService);
    buscar(rut: string): Persona;
}
