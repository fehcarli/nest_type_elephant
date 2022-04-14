import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "postgres",
    host: "heffalump.db.elephantsql.com", //o endereço de hospedagem do host
    url: "postgres://mskuamuf:CK7r4n2060zVlZXySbAQyupL20qK9GiR@heffalump.db.elephantsql.com/mskuamuf", //url do serviço de banco aqui
    username: "mskuamuf", //nome do serviço a ser utilizado
    password: "CK7r4n2060zVlZXySbAQyupL20qK9GiR", //hash da senha do serviço 
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
