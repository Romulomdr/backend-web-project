import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação das Cidades
interface IqueryProps{  
    page?: number;
    limit?: number;
    filter?: string;

};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IqueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    })),
}));

//Enviando resposta ao servidor
export const getAll = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {

    console.log(req.query);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};