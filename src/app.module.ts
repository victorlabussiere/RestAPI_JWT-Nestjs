import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { HFSE_databaseConfigs } from './database/database.config';

import * as dotenv from 'dotenv'

dotenv.config()

const mySqlConfigs = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}

const mySqlDatabase = new MySqlStrategy(UserSchema, mySqlConfigs)

@Module({
  imports: [
    mySqlDatabase.connect(),
    // conexão sistema<--->banco de dados
    TypeOrmModule.forRoot(HFSE_databaseConfigs),
    // conexão recursos Users
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }