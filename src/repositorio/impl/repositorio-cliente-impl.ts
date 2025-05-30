import DadosCliente from "../../util/dados-cliente";
import IRepositorioProduto from "../repositorio-cliente";
import Produto from "src/modelo/produto";

export default class RepositorioProdutoImpl implements IRepositorioProduto{
    
    //Array de Clientes
    private listaProduto:Array<Produto> = [];
    
    constructor(){
        //Carrega as informações contidas no arquivo json
        this.listaProduto = DadosCliente.dados();
    }

    public listarTodos():Array<Produto>{
        return this.listaProduto;
    }

    public buscarPorCodigo(codigo:number): Produto {
        const produto = this.listaProduto.find(
            produto => produto.codigo == codigo
        );
        if (!produto) {
            throw new Error(`Produto com código ${codigo} não encontrado.`);
        }
        return produto;
    }

    public salvar(produto:Produto): void{
        this.listaProduto.push(produto);
    }

    public atualizar(codigo:number, produto:Produto): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaProduto.findIndex(
            produto => produto.codigo == codigo
        );

        //Atualiza o registro
        this.listaProduto[indice] = produto;
    }

    public excluir(codigo:number): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaProduto.findIndex(
            produto => produto.codigo == codigo
        );

        //Remove o registo do array
        this.listaProduto.splice(indice, 1);
    }

    //Apenas para simular a chave incremental do banco de dados
    //Retorna o próximo valor do identificado para que não 
    //haja duplicidade de identificadores
    public obterProximoCodigo(): number{
        
        if(this.listaProduto.length == 0){
            return 1
        }else{
            //Obtém o último registro do array
            let ultimoRegistro = this.listaProduto[
                this.listaProduto.length - 1
            ];

            //Incrementa o identificador 
            //para ser usado um novo registro
            return ultimoRegistro.codigo + 1;
        }
    }
}