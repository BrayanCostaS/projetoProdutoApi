import Produto from '../modelo/produto';



export default interface IRepositorioProduto {
    listarTodos():Array<Produto>;
    buscarPorCodigo(codigo:number): Produto;
    salvar(cliente:Produto): void;
    atualizar(codigo:number, cliente:Produto): void;
    excluir(codigo:number): void;
}