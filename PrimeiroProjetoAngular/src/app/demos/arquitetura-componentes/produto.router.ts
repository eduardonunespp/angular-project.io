import { Route, RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoResolve } from "./services/produto.resolve";

const produtoRouterConfig: Routes = [

    {path: '', component: ProdutoAppComponent,
    children: [
        { path: '', redirectTo: 'todos', pathMatch: 'full' },
        { 
            path: ':estado',
            component: ProdutoDashboardComponent,
            resolve: {
                produtos: ProdutoResolve
            },
            data: {
                teste: 'informação'
            }
        },
        { path: 'editar/:id', component: EditarProdutoComponent },
        
    ]
    }
   

]

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
      
})
export class ProdutoRouterConfig {}