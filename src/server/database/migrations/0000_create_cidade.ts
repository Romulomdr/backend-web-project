import { Knex } from "knex";
import { ETableNames } from "../eTableNames";

// comando abaixo vai fazer o mesmo que um comando SQL de create table
export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(ETableNames.cidade, table =>{
        table.bigIncrements('id').primary().index();
        table.string('nome', 150).index().notNullable;
        
        table.comment('TABELA USADA PARA ARMAZENAR CIDADES NO SISTEMA');
    })
    .then(() => {
        console.log(`# Create Table ${ETableNames.cidade}`)
    });
}


export async function down(knex: Knex) {
    return knex
    .schema
    .dropTable(ETableNames.cidade)
    .then(() => {
        console.log(`# Dropped Table ${ETableNames.cidade}`)
    });
}

