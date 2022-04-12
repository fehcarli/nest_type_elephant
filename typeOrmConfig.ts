import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "postgres",
    host: "",
    url: "", //url do serviço de banco aqui
    username: "", //nome do serviço a ser utilizado
    password: "", //hash da senha do serviço 
    database: "BookCaseDB",
    synchronize: false,
    migrationsRun: true,
    migrationsTableName: "MigrationHistory",
    extra: {
        trustServerCertificate: true,
    },
    entities: ["src/database/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/**"],    
    cli: {
        entitiesDir: "src/database/entities",
        migrationsDir: "src/database/migrations"
    }
}

export = config;