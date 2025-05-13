// import { RepositorioBase } from './RepositorioBase';
// import { Emprestimo } from '../models/Emprestimo';

// export class EmprestimoRepositorio extends RepositorioBase<Emprestimo> {}

import { RepositorioBase } from './RepositorioBase';
import { Emprestimo } from '../models/Emprestimo';
import { LogarMetodo } from '../utils/LogarMetodo';

export class EmprestimoRepositorio extends RepositorioBase<Emprestimo> {
  @LogarMetodo()
  override criar(emprestimo: Emprestimo): void {
    super.criar(emprestimo);
  }

  @LogarMetodo()
  override listar(): Emprestimo[] {
    return super.listar();
  }
}
