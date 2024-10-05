import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  conectarBD(consulta: string): string {
    console.log("CONSULTA-DbService:",consulta);
    return '';
  }
}
