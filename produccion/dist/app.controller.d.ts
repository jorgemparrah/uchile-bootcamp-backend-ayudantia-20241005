import { AppService } from './app.service';
import { BuscarUsuarioInterface } from './interfaces/buscarUsuario.interface';
import { Persona } from './clases/persona.clase';
import { DbService } from './services_consultas/db.service';
import { ApiService } from './services_consultas/api.service';
export declare class AppController {
    private readonly appService;
    private readonly dbService;
    private readonly apiService;
    buscarUsuario: BuscarUsuarioInterface;
    constructor(appService: AppService, dbService: DbService, apiService: ApiService);
    buscarPersona(rut: string): Persona;
}
