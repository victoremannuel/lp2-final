export interface ICrud<T> {
  criar(item: T): void;
  listar(): T[];
  atualizar(id: number, item: T): void;
  remover(id: number): void;
}