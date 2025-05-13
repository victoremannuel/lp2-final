"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogarMetodo = LogarMetodo;
function LogarMetodo() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Método chamado: ${propertyKey}`);
            console.log(`Parâmetros: ${JSON.stringify(args)}`);
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado: ${JSON.stringify(resultado)}`);
            return resultado;
        };
    };
}
