import { Knex } from 'knex';
import path from 'path';

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        //voltando as pastas para criar o arquivo do banco na raiz 
        filename: path.resolve(__dirname,'..','..','..','..','database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname,'..','migrations')
    },
    seeds: {
        directory: path.resolve(__dirname,'..','seeds'),
    },
    //criando persistencia para o SQlite
    pool:{
       afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys = ON');
            done();
       } 
    }
};

export const test: Knex.Config = {
    ...development,
    connection: ':memory:',
};

export const production: Knex.Config = {};
