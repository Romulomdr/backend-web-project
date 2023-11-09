import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação da query 
interface IqueryProps{  
    id?: number;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const deleteByIdValidation = validation((getSchema) => ({
    //Tipos de requisição, Body, header, params, query
    params: getSchema<IqueryProps>(yup.object().shape({
        id: yup.number().integer().required().min(1).moreThan(0)
    })),
}));

//Enviando resposta ao servidor
export const deleteById = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {

    console.log(req.params);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};