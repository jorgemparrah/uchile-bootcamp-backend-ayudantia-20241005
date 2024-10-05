import { DbService } from '../services_consultas/db.service';
import { BuscarUsuarioInterface } from "src/interfaces/buscarUsuario.interface";
import { Persona } from './persona.clase';

export class BuscarUsuarioEnDB implements BuscarUsuarioInterface {

  dbService: DbService;

  constructor(dbService: DbService) {
    this.dbService = dbService;
  }

  buscar(rut: string): Persona {
    this.dbService.conectarBD("SELECT * FROM personas WHERE rut = " + rut);
    // ENVIAR CONSULTA
    // RECIBIR RESPUESTA
    // CREAR OBJETO PERSONA
    return new Persona();
  }

}
