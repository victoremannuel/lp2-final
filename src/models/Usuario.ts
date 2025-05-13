export enum TipoUsuario {
  ESTUDANTE = "Estudante",
  PROFESSOR = "Professor",
  FUNCIONARIO = "Funcionário"
}

export class Usuario {
  constructor(
    public id: number,
    public nome: string,
    public matricula: string,
    public tipo: TipoUsuario
  ) {}
}