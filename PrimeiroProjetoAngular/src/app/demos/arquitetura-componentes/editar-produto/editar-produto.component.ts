import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ],
})
export class EditarProdutoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private router: Router
    ) {}

  produto: Produto

  ngOnInit() {
      this.route.params
        .subscribe(params => {
          this.produto = this.produtosService.obterPorId(params['id'])
        })
  }


  salvar(){
    this.router.navigate(['/produtos'])
  }

 

}
