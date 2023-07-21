import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { UserSchema } from './database/entity/UserSchema.entity';
import { MySqlStrategy } from './database/strategy/MySqlStrategy';

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
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }