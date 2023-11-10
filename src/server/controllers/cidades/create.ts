import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

//Interface para validação das Cidades
interface Icidade{  
    nome: String;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const createValidation = validation((getSchema) => ({
    body: getSchema<Icidade>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}));

//Enviando resposta ao servidor
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {

    console.log(req.body);

    return res.status(StatusCodes.CREATED).send('Não implementado!');
};