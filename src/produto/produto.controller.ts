import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import Produto from '../modelo/produto';
import RepositorioProdutoImpl from '../repositorio/impl/repositorio-cliente-impl';

@Controller()
export class ProdutoController {
  private repositorio = new RepositorioProdutoImpl();

  // Retorna texto simples na raiz
  @Get()
  getRaiz(): string {
    return 'API Produto está funcionando no Node!';
  }

  // Retornar todos produtos - GET /produtos
  @Get('produtos')
  listarTodos(): Produto[] {
    return this.repositorio.listarTodos();
  }

  // Incluir um produto - POST /
  @Post()
  incluirProduto(@Body() produto: Produto): string {
    produto.codigo = this.repositorio.obterProximoCodigo();
    this.repositorio.salvar(produto);
    return 'Produto incluído com sucesso';
  }

  // Consultar pelo código - GET /cliente?codigo=1
  @Get('cliente')
  buscarPorCodigo(@Query('codigo') codigo: string): Produto | string {
    const codNum = Number(codigo);
    const produto = this.repositorio.buscarPorCodigo(codNum);
    if (!produto) return 'Produto não encontrado';
    return produto;
  }

  // Alterar um produto - PUT /codigo
  @Put(':codigo')
  alterarProduto(@Param('codigo') codigo: string, @Body() produto: Produto): string {
    const codNum = Number(codigo);
    this.repositorio.atualizar(codNum, produto);
    return 'Produto atualizado com sucesso';
  }

  // Excluir um produto - DELETE /codigo
  @Delete(':codigo')
  excluirProduto(@Param('codigo') codigo: string): string {
    const codNum = Number(codigo);
    this.repositorio.excluir(codNum);
    return 'Produto excluído com sucesso';
  }
}
