export function logarTempoExecucao() {
    /*
     * Função para logar no console o tempo de execução de uma função por decorators
     */
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // guarda o método original em uma variável
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now()
            // chama o método original e passa os argumentos usando o contexto atual 
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 100}`)
            // retorna o valor de retorno de método original
            retorno
        }
        return descriptor;
    }
}