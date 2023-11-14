import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('cidades - create', () => {
    
    // CRIANDO TESTE PARA SABER SE A CRIAÇÃO DE CIDADE ESTÁ FUNCIONANDO
    it('Criar Registro', async() => {
        const res1 = await testeServer
        .post('/cidades')
        .send({nome: 'Tucuruí'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testeServer
        .get('/cidades')
        .send();
        
        //Pegando a quantidade total de registro no banco de dados e vendo se é maior que zero
        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        //Vai ter que devolver pelo menos algum registro para a página maior que zero
        expect(resBuscada.body.length).toBeGreaterThan(0);

    })
});