import { ApiService } from "src/services_consultas/api.service";
import { Persona } from "./persona.clase";
import { BuscarUsuarioInterface } from "src/interfaces/buscarUsuario.interface";

export class BuscarUsuarioEnAPI implements BuscarUsuarioInterface {

  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  buscar(rut: string): Persona {
    this.apiService.buscar(`https://api.com/personas?rut=${rut}`);
    // DETERMINAR LA URL DEL SERVICIO DE LA API
    // ENVIAR CONSULTA
    // RECIBIR RESPUESTA
    // CREAR OBJETO PERSONA
    return new Persona();
  }

}
