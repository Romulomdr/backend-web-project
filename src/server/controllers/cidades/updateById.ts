import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação da query 
interface IparamProps{  
    id?: number;
};
interface IBodyProps{
    nome: string;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const updateByIdValidation = validation((getSchema) => ({
    //Tipos: Body, header, params, query
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(2)
    })),
    params: getSchema<IparamProps>(yup.object().shape({
        id: yup.number().integer().required().min(1).moreThan(0)
    })),
}));

//Enviando resposta ao servidor
export const updateById = async (req: Request<IparamProps, {}, IBodyProps>, res: Response) => {

    console.log(req.body);
    console.log(req.params);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};