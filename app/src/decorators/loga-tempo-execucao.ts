export function logarTempoExecucao(emSeg: boolean = false) {
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
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSeg) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now()
            // chama o método original e passa os argumentos usando o contexto atual 
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`)
            // retorna o valor de retorno de método original
            retorno
        }
        return descriptor;
    }
}