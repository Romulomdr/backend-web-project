import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('Cidades - deleteById', () => {

    // DELETANDO POR ID
    it('Deletando id inexistente', async() => {
        // Primeiro criando uma cidade
        const res1 = await testeServer
        .post('/cidades')
        .send({nome: "Tucuruí"});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testeServer.delete(`/cidades/1`).send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    })


    // CRIANDO TESTE PARA SABER SE A VALIDAÇÃO DE NOME ESTÁ FUNCIONANDO
    it('Deletando id inexistente', async() => {
        const res1 = await testeServer
        // como ainda não tem token ou banco de dados eu coloquei
        // um id para que sempre que der ele vai dar o erro
        .delete('/cidades/99999')
        .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    })
});



