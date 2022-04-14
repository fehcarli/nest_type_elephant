import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "postgres",
    host: "", //o endereço de hospedagem do host
    url: "", //url do serviço de banco aqui
    username: "", //nome do serviço a ser utilizado
    password: "", //hash da senha do serviço 
    database: "BookCaseDB", //o nome banco de dados como aparece no serviço elephantSQL
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
