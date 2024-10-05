import { Deportista } from "../interfaces/deportista.interface";
import { Persona } from "./persona.clase";

export class Futbolista extends Persona implements Deportista {

  deporte: string = "Fútbol";

  practicar() : void {
    console.log('Practicando fútbol');
  }

  competir() : void {
    console.log('Compitiendo en fútbol');
  }

  respirar(): void {
    console.log('Respirando como futbolista');
  }

}
