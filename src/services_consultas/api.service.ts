import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  buscar(consulta: string): string {
    console.log("CONSULTA-ApiService:",consulta);
    return "";
  }
}
