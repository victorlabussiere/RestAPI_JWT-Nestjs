import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { User } from "src/users/entity/User.entity"

dotenv.config()

export const HFSE_databaseConfigs: TypeOrmModule = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: true
}