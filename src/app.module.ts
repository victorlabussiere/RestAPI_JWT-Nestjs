import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

import { HFSE_databaseConfigs } from './database/database.config';

@Module({
  imports: [
    // conexão sistema<--->banco de dados
    TypeOrmModule.forRoot(HFSE_databaseConfigs),
    // conexão recursos Users
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }