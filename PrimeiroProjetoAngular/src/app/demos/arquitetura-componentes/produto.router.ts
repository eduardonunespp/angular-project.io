import { Route, RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";

const produtoRouterConfig: Routes = [

    {path: '', component: ProdutoAppComponent,
    children: [
        {
            path: '', component: ProdutoDashboardComponent
        },
        {
            path: 'editar/:id', component: EditarProdutoComponent
        },
        
    ]
    },
   

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