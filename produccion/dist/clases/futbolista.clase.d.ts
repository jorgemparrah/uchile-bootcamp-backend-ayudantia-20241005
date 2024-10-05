import { Deportista } from "../interfaces/deportista.interface";
import { Persona } from "./persona.clase";
export declare class Futbolista extends Persona implements Deportista {
    deporte: string;
    practicar(): void;
    competir(): void;
    respirar(): void;
}
