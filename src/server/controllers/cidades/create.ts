import { Request, Response } from "express";

interface Icidade{  
    nome: String;
};

export const create = (req: Request<{}, {}, Icidade>, res: Response) => {
    


    console.log(req.body);

    return res.send('Create');
};