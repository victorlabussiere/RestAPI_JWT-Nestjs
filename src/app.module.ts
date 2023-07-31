import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { UserSchema } from './entity/UserSchema.entity';

import * as dotenv from 'dotenv'
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config()
const mySqlDatabase = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [UserSchema],
  synchronize: true
})

@Module({
  imports: [
    mySqlDatabase,
    UsersModule,
    AuthModule,
    PassportModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }