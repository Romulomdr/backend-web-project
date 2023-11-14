import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação da query 
interface IparamsProps{  
    id?: number;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const deleteByIdValidation = validation((getSchema) => ({
    //Tipos de requisição, Body, header, params, query
    params: getSchema<IparamsProps>(yup.object().shape({
        id: yup.number().integer().required().min(1).moreThan(0)
    })),
}));

//Enviando resposta ao servidor
export const deleteById = async (req: Request<IparamsProps>, res: Response) => {

    if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default: 'Registro não encontrado'
        }
    });

    return res.status(StatusCodes.NO_CONTENT).send('Não implementado!');
};