import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent {

  constructor(private produtoService: ProdutosService){}

  public produtos: Produto[] = [];

  ngOnInit(){
    this.produtoService.obterProdutos()
        .subscribe(
          produtos => {
            this.produtos = produtos
            console.log(produtos)
          },
          error => console.log(error)
        )
  }

}
