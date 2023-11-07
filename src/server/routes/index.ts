import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/teste', (_, res) => {
	return res.send('Ola, DEV!');
});

router.post('/teste2', (req, res) => {
	console.log(req.body);
	return res.status(StatusCodes.OK).json(req.body);
});


export { router };