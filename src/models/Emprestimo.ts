import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export enum StatusEmprestimo {
  ATIVO = "Ativo",
  DEVOLVIDO = "Devolvido",
  ATRASADO = "Atrasado"
}

export class Emprestimo {
  constructor(
    public id: number,
    public livro: Livro,
    public usuario: Usuario,
    public dataEmprestimo: Date,
    public dataDevolucao: Date | null,
    public status: StatusEmprestimo
  ) {}
}