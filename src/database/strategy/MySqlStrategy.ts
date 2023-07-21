import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { Database } from '../entity/Database.entity'
dotenv.config()

type DatabaseConfig = {
    host: string
    port: number
    username: string
    password: string
    database: string
}

export class MySqlStrategy implements Database {
    databaseConfig
    schema
    constructor(schema, databaseConfig: DatabaseConfig) {
        this.schema = schema
        this.databaseConfig = databaseConfig
    }

    connect() {
        return TypeOrmModule.forRoot({
            type: 'mysql',
            ...this.databaseConfig,
            entities: [this.schema],
            synchronize: true
        })
    }
}