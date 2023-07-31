export abstract class Database {

    constructor(public databaseConfig, public schema) {
        this.databaseConfig = databaseConfig
        this.schema = schema
    }

    connect() { }
}