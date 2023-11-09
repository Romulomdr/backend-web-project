// Esse estilo de importação serve para pegar tanto
// o atributo do arquivo create quanto do index
import * as create from './create';
import * as getAll from './getAll';
import * as getById from './getById';
import * as updateById from './updateById';

export const CidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
}