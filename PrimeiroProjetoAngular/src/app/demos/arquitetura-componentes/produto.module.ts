import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { RouterModule } from "@angular/router";
import { ProdutoRouterConfig } from "./produto.router";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { ProdutoCardDetalheComponent } from "./components/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./components/produto-count.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProdutosService } from "./services/produto.service";
import { ProdutoResolve } from "./services/produto.resolve";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent,
    ProdutoAppComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRouterConfig,
    HttpClientModule
  ],
  providers: [
    ProdutosService,
    ProdutoResolve
  ],

  exports: [],
})
export class ProdutoModule {}
