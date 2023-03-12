import { Route, RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const produtoRouterConfig: Routes = [

    {path: '', component: ProdutoDashboardComponent}

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