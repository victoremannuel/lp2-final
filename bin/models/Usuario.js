"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.TipoUsuario = void 0;
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario["ESTUDANTE"] = "Estudante";
    TipoUsuario["PROFESSOR"] = "Professor";
    TipoUsuario["FUNCIONARIO"] = "Funcion\u00E1rio";
})(TipoUsuario || (exports.TipoUsuario = TipoUsuario = {}));
class Usuario {
    constructor(id, nome, matricula, tipo) {
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.tipo = tipo;
    }
}
exports.Usuario = Usuario;
