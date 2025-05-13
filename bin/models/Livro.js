"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = exports.CategoriaLivro = void 0;
var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["FICCAO"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["NAO_FICCAO"] = "N\u00E3o Fic\u00E7\u00E3o";
    CategoriaLivro["TECNICO"] = "T\u00E9cnico";
    CategoriaLivro["DIDATICO"] = "Did\u00E1tico";
})(CategoriaLivro || (exports.CategoriaLivro = CategoriaLivro = {}));
class Livro {
    constructor(id, titulo, autor, ano, categoria) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.categoria = categoria;
    }
}
exports.Livro = Livro;
