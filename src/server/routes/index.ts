import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

import {CidadesController} from './../controllers'
const router = Router();

router.get('/teste', (_, res) => {
	return res.send('Ola, DEV!');
});

router.post('/cidades', CidadesController.create);


export { router };