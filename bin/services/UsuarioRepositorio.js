"use strict";
// import { RepositorioBase } from './RepositorioBase';
// import { Usuario } from '../models/Usuario';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepositorio = void 0;
// export class UsuarioRepositorio extends RepositorioBase<Usuario> {}
const RepositorioBase_1 = require("./RepositorioBase");
const Usuario_1 = require("../models/Usuario");
const LogarMetodo_1 = require("../utils/LogarMetodo");
class UsuarioRepositorio extends RepositorioBase_1.RepositorioBase {
    criar(usuario) {
        super.criar(usuario);
    }
    listar() {
        return super.listar();
    }
}
exports.UsuarioRepositorio = UsuarioRepositorio;
__decorate([
    (0, LogarMetodo_1.LogarMetodo)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario_1.Usuario]),
    __metadata("design:returntype", void 0)
], UsuarioRepositorio.prototype, "criar", null);
__decorate([
    (0, LogarMetodo_1.LogarMetodo)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsuarioRepositorio.prototype, "listar", null);
