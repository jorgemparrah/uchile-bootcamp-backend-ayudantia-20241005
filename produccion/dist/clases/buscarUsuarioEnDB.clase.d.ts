import { DbService } from '../services_consultas/db.service';
import { BuscarUsuarioInterface } from "src/interfaces/buscarUsuario.interface";
import { Persona } from './persona.clase';
export declare class BuscarUsuarioEnDB implements BuscarUsuarioInterface {
    dbService: DbService;
    constructor(dbService: DbService);
    buscar(rut: string): Persona;
}
