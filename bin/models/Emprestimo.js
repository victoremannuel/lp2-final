"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = exports.StatusEmprestimo = void 0;
var StatusEmprestimo;
(function (StatusEmprestimo) {
    StatusEmprestimo["ATIVO"] = "Ativo";
    StatusEmprestimo["DEVOLVIDO"] = "Devolvido";
    StatusEmprestimo["ATRASADO"] = "Atrasado";
})(StatusEmprestimo || (exports.StatusEmprestimo = StatusEmprestimo = {}));
class Emprestimo {
    constructor(id, livro, usuario, dataEmprestimo, dataDevolucao, status) {
        this.id = id;
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.status = status;
    }
}
exports.Emprestimo = Emprestimo;
