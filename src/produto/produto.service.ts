import { Injectable } from '@nestjs/common';
import Produto from '../modelo/produto';
import RepositorioProdutoImpl from '../repositorio/impl/repositorio-cliente-impl';

@Injectable()
export class ProdutoService {
  private repositorio = new RepositorioProdutoImpl();

  listarTodos(): Produto[] {
    return this.repositorio.listarTodos();
  }

  buscarPorCodigo(codigo: number): Produto | undefined {
    return this.repositorio.buscarPorCodigo(codigo);
  }

  salvar(produto: Produto): void {
    produto.codigo = this.repositorio.obterProximoCodigo();
    this.repositorio.salvar(produto);
  }

  atualizar(codigo: number, produto: Produto): void {
    this.repositorio.atualizar(codigo, produto);
  }

  excluir(codigo: number): void {
    this.repositorio.excluir(codigo);
  }
}
