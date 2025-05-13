export function buscaRecursiva<T>(lista: T[], chave: keyof T, valor: any): T | undefined {
  if (lista.length === 0) return undefined;
  const [atual, ...restante] = lista;
  if (atual[chave] === valor) return atual;
  return buscaRecursiva(restante, chave, valor);
}
