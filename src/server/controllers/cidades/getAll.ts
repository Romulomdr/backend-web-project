import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação da query 
interface IqueryProps{  
    page?: number;
    limit?: number;
    filter?: string;

};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const getAllValidation = validation((getSchema) => ({
    //Tipos de requisição, Body, header, params, query
    query: getSchema<IqueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    })),
}));

//Enviando resposta ao servidor
export const getAll = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);


    console.log(req.query);

    return res.status(StatusCodes.OK).json([
        {
            id: 1,
            nome: "Tucuruí",
        }
    ]);
};