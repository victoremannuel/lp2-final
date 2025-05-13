export function LogarMetodo() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Método chamado: ${propertyKey}`);
      console.log(`Parâmetros: ${JSON.stringify(args)}`);
      const resultado = metodoOriginal.apply(this, args);
      console.log(`Resultado: ${JSON.stringify(resultado)}`);
      return resultado;
    };
  };
}