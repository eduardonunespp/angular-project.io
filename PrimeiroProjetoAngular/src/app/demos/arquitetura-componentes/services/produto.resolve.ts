import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";
import { ProdutosService } from "./produto.service";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";



@Injectable()
export class ProdutoResolve {


        constructor(private produtoService: ProdutosService){

        }
    
        resolve(route: ActivatedRouteSnapshot){
            return this.produtoService.obterProdutos(route.params.estado)
        }


}