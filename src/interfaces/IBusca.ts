export interface IBusca<T> {
  buscarPorId(id: number): T | undefined;
  buscarPorTermo(termo: string): T[];
}