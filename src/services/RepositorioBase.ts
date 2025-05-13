import { ICrud } from '../interfaces/ICrud';
import { IBusca } from '../interfaces/IBusca';

export abstract class RepositorioBase<T extends { id: number }> implements ICrud<T>, IBusca<T> {
  protected dados: Map<number, T> = new Map();

  criar(item: T): void {
    if (this.dados.has(item.id)) {
      throw new Error(`Item com id ${item.id} já existe.`);
    }
    this.dados.set(item.id, item);
  }

  listar(): T[] {
    return Array.from(this.dados.values());
  }

  atualizar(id: number, item: T): void {
    if (!this.dados.has(id)) {
      throw new Error(`Item com id ${id} não encontrado.`);
    }
    this.dados.set(id, item);
  }

  remover(id: number): void {
    if (!this.dados.delete(id)) {
      throw new Error(`Item com id ${id} não encontrado para remoção.`);
    }
  }

  buscarPorId(id: number): T | undefined {
    return this.dados.get(id);
  }

  buscarPorTermo(termo: string): T[] {
    return this.listar().filter(item => JSON.stringify(item).toLowerCase().includes(termo.toLowerCase()));
  }
}