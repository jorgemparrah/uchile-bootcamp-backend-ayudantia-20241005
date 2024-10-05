import { Persona } from "../clases/persona.clase";
export interface BuscarUsuarioInterface {
    buscar(rut: string): Persona;
}
