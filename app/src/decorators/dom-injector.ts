export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        // para resolver o problema de toda hora o decorator ficar batendo no html
        // criamos uma varivel que será verificada antes de bater no html
        let elemento: HTMLElement;
        const getter = function () {
            // se a variavel estiver vazia, só ai ele bate no html
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            // se ela ja estiver la, ele so retorna
            return elemento;
        }
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        )
    }
}