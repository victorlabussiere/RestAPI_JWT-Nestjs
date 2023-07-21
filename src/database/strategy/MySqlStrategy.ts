import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { DatabaseConfig } from './DatabaseConfigs.types'
import { Database } from '../entity/Database.entity'
dotenv.config()

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