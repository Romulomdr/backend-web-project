import { StatusCodes } from 'http-status-codes';

import { testeServer } from '../jest.setup';


describe('Cidades - GetById', () => {

  it('Busca registro por id', async () => {

    const res1 = await testeServer
      .post('/cidades')
      .send({ nome: 'Tucuruí' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testeServer
      .get(`/cidades/1`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });
  it('Tenta buscar registro que não existe', async () => {

    const res1 = await testeServer
      .get('/cidades/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});