import { Deportista } from "../interfaces/deportista.interface";
import { Persona } from "./persona.clase";

export class Boxeador extends Persona implements Deportista {

  deporte: string = "Boxeo";

  practicar() : void {
    console.log('Practicando boxeo');
  }

  competir() : void {
    console.log('Compitiendo en boxeo');
  }

}
