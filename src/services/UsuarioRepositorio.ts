// import { RepositorioBase } from './RepositorioBase';
// import { Usuario } from '../models/Usuario';

// export class UsuarioRepositorio extends RepositorioBase<Usuario> {}

import { RepositorioBase } from './RepositorioBase';
import { Usuario } from '../models/Usuario';
import { LogarMetodo } from '../utils/LogarMetodo';

export class UsuarioRepositorio extends RepositorioBase<Usuario> {
  @LogarMetodo()
  override criar(usuario: Usuario): void {
    super.criar(usuario);
  }

  @LogarMetodo()
  override listar(): Usuario[] {
    return super.listar();
  }
}