"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioBase = void 0;
class RepositorioBase {
    constructor() {
        this.dados = new Map();
    }
    criar(item) {
        if (this.dados.has(item.id)) {
            throw new Error(`Item com id ${item.id} já existe.`);
        }
        this.dados.set(item.id, item);
    }
    listar() {
        return Array.from(this.dados.values());
    }
    atualizar(id, item) {
        if (!this.dados.has(id)) {
            throw new Error(`Item com id ${id} não encontrado.`);
        }
        this.dados.set(id, item);
    }
    remover(id) {
        if (!this.dados.delete(id)) {
            throw new Error(`Item com id ${id} não encontrado para remoção.`);
        }
    }
    buscarPorId(id) {
        return this.dados.get(id);
    }
    buscarPorTermo(termo) {
        return this.listar().filter(item => JSON.stringify(item).toLowerCase().includes(termo.toLowerCase()));
    }
}
exports.RepositorioBase = RepositorioBase;
