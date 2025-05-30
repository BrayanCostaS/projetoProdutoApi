export default class Produto {
    constructor(
        public codigo: number,
        public descricao: string,
        public marca: string,
        public valor: number
    ) {}
    
    toJSON() {
        return {
            codigo: this.codigo,
            descricao: this.descricao,
            marca: this.marca,
            valor: this.valor
        };
    }
}
