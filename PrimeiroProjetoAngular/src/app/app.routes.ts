import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { Component, NgModule } from "@angular/core";
import { CadastroComponent } from "./demos/reactForms/cadastro/cadastro.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";
import { FilmesComponent } from "./demos/pipes/filmes/filmes.component";
import { BarDiZonesComponent } from "./demos/bar-di-zones/bar-di-zones.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "feature-data-binding", component: DataBindingComponent },
  //{ path: 'produtos', component: ListaProdutoComponent},
  { path: "produto-detalhe/:id", component: ListaProdutoComponent },
  { path: "carrinho/:id", component: ListaProdutoComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "filmes", component: FilmesComponent },
  { path: "bar", component: BarDiZonesComponent},
  {
    path: "produtos",
    loadChildren: () =>
      import("./demos/arquitetura-componentes/produto.module").then(
        (m) => m.ProdutoModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRouterConfig {}
