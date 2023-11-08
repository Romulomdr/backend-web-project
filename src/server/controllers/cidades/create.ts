import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface Icidade{  
    nome: String;
    estado: String;
};

//Função para validar os dados usando YUP
const bodyValidation: yup.Schema<Icidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2),

});

export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
    let validatedData: Icidade | undefined = undefined; 
    try {
        validatedData = await bodyValidation.validate(req.body, {abortEarly: false});
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if(error.path === undefined) return;
            validationErrors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors,
        });
    }

    console.log(validatedData);

    return res.send('Create');
};