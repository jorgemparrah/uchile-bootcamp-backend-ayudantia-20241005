import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './services_consultas/db.service';
import { ApiService } from './services_consultas/api.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DbService, ApiService],
})
export class AppModule {}
