import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Clientes } from './entity/cliente';
import { Produtos } from './entity/produto';
import { Compra } from './entity/compra';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "provaC",
    synchronize: true,
    logging: false,
    entities: [Clientes, Produtos, Compra],
    migrations: [],
    subscribers: []
});