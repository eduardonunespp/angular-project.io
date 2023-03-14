import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { RouterModule } from "@angular/router";
import { ProdutoRouterConfig } from "./produto.router";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt"
registerLocaleData(localePt)



@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRouterConfig
    ],
    exports: [

    ]
})

export class ProdutoModule {}