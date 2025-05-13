export enum CategoriaLivro {
  FICCAO = "Ficção",
  NAO_FICCAO = "Não Ficção",
  TECNICO = "Técnico",
  DIDATICO = "Didático"
}

export class Livro {
  constructor(
    public id: number,
    public titulo: string,
    public autor: string,
    public ano: number,
    public categoria: CategoriaLivro
  ) {}
}