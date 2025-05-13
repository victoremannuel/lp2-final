"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscaRecursiva = buscaRecursiva;
function buscaRecursiva(lista, chave, valor) {
    if (lista.length === 0)
        return undefined;
    const [atual, ...restante] = lista;
    if (atual[chave] === valor)
        return atual;
    return buscaRecursiva(restante, chave, valor);
}
