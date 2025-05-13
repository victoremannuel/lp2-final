// import { RepositorioBase } from './RepositorioBase';
// import { Livro } from '../models/Livro';

// export class LivroRepositorio extends RepositorioBase<Livro> {}

import { RepositorioBase } from './RepositorioBase';
import { Livro } from '../models/Livro';
import { LogarMetodo } from '../utils/LogarMetodo';

export class LivroRepositorio extends RepositorioBase<Livro> {
  @LogarMetodo()
  override criar(livro: Livro): void {
    super.criar(livro);
  }

  @LogarMetodo()
  override listar(): Livro[] {
    return super.listar();
  }

  buscarPorTitulo(titulo: string): Livro | undefined {
    const { buscaRecursiva } = require('../utils/BuscaRecursiva');
    return buscaRecursiva(this.listar(), 'titulo', titulo);
  }

  buscarPorId(id: number): Livro | undefined {
    const { buscaRecursiva } = require('../utils/BuscaRecursiva');
    return buscaRecursiva(this.listar(), 'id', id);
  }
}