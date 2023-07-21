export abstract class Database {
    databaseConfig
    schema
    constructor(databaseConfig, schema) {
        this.databaseConfig = databaseConfig
        this.schema = schema
    }

    connect() { }
}