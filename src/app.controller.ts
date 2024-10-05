import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { BuscarUsuarioInterface } from './interfaces/buscarUsuario.interface';
import { Persona } from './clases/persona.clase';
import { BuscarUsuarioEnAPI } from './clases/buscarUsuarioEnAPI.clase';
import { BuscarUsuarioEnDB } from './clases/buscarUsuarioEnDB.clase';
import { DbService } from './services_consultas/db.service';
import { ApiService } from './services_consultas/api.service';
import { Deportista } from './interfaces/deportista.interface';
import { Futbolista } from './clases/futbolista.clase';
import { Boxeador } from './clases/boxeador.clase';


@Controller()
export class AppController {

  buscarUsuario : BuscarUsuarioInterface;

  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
    private readonly apiService: ApiService
  ) {
    this.buscarUsuario = new BuscarUsuarioEnDB(dbService);
    //this.buscarUsuario = new BuscarUsuarioEnAPI(apiService);
  }

  @Get(":rut")
  buscarPersona(@Param("rut") rut:string): Persona {
    const deportistas : Deportista[] = [];
    deportistas.push(new Futbolista());
    deportistas.push(new Boxeador());
    for (let deportista of deportistas) {
      deportista.practicar();
      deportista.competir();
      if (deportista instanceof Persona) {
        (deportista as Persona).pensar();
        (deportista as Persona).comer();
        (deportista as Persona).respirar();
      }
    }

    return this.buscarUsuario.buscar(rut);
  }
}
