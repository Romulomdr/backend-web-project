import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('cidades - create', () => {
    
    // CRIANDO TESTE PARA SABER SE A CRIAÇÃO DE CIDADE ESTÁ FUNCIONANDO
    it('Atualizando por ID', async() => {
        const res1 = await testeServer
        .post('/cidades')
        .send({nome: 'Tucuruí'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('object');

        const resUpdate = await testeServer
        .put(`/cidades/1`)
        .send({
            nome: "Pará"
        });
        expect(resUpdate.statusCode).toEqual(StatusCodes.OK);

    })

    // PROCESSANDO POR ID QUE NÃO EXISTE
    it('Deletando id inexistente', async() => {
        const res2 = await testeServer
        // como ainda não tem token ou banco de dados eu coloquei
        // um id para que sempre que der ele vai dar o erro
        .put('/cidades/99999')
        .send({nome: "cidade"});

        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res2.body).toHaveProperty('errors.default');
    })
});