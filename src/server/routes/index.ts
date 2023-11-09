import { Router } from 'express';

import {CidadesController} from './../controllers'

const router = Router();

router.get('/teste', (_, res) => {
	return res.send('Ola, DEV!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);

export { router };