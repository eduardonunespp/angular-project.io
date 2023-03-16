import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../services/produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ],
  providers: [ ProdutosService ]
})
export class EditarProdutoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private produtosService: ProdutosService) {}



  ngOnInit() {
      this.route.params
        .subscribe(params => {
          console.log(params['id'])
        })
  }

 

}
