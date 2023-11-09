import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

//Interface para validação das Cidades
interface Icidade{  
    nome: String;
    estado: String;
};

//Interface para validação das Querys
interface Ifilter{
    filter?: string;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const createValidation = validation((getSchema) => ({
    body: getSchema<Icidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(2),
    })),
    query: getSchema<Ifilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    })),
}));

//Enviando resposta ao servidor
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {

    console.log(req.body);

    return res.send('Create');
};