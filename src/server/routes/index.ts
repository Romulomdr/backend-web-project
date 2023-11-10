import { Router } from 'express';

import {CidadesController} from './../controllers'

const router = Router();


router.get('/teste', (_, res) => {
	return res.send('Ola, DEV!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
// Para fazer com que ele use o parametro da query o caminho tem que ser diferente
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);

export { router };

//QUANDO VOLTAR FAZER O DELETE