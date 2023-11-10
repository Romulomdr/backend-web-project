import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('cidades - create', () => {
    
    // CRIANDO TESTE PARA SABER SE A CRIAÇÃO DE CIDADE ESTÁ FUNCIONANDO
    it('Criar Registro', async() => {
        const res1 = await testeServer
        .post('/cidades')
        .send({nome: 'Tucuruí'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('object');
    })
    // CRIANDO TESTE PARA SABER SE A VALIDAÇÃO DE NOME ESTÁ FUNCIONANDO
    it('Tentar criar cidade com nome muito curto', async() => {
        const res1 = await testeServer
        .post('/cidades')
        .send({nome: 'Ca'});

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    })
});



