import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
//Interface para validação da query 
interface IqueryProps{  
    id?: number;
};

// Criando uma Regra de validação geral para todas as partes da requisição que forem usadas.
export const getByIdValidation = validation((getSchema) => ({
    //Tipos de requisição, Body, header, params, query
    params: getSchema<IqueryProps>(yup.object().shape({
        id: yup.number().integer().required().min(1).moreThan(0)
    })),
}));

//Enviando resposta ao servidor
export const getById = async (req: Request<IqueryProps>, res: Response) => {

    if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default: 'Registro não encontrado'
        }
    });
    console.log(req.params);

    return res.status(StatusCodes.OK).json({
        id: req.params.id,
        nome: 'Tucuruí',
    });
};