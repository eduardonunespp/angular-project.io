import { NgModule, Provider, asNativeElements } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from "@angular/common/locales/pt"
registerLocaleData(localePt)

import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { AppRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './demos/reactForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormartPipe } from './demos/pipes/filmes/image.pipe';
import { BarDiZonesComponent } from './demos/bar-di-zones/bar-di-zones.component';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { TodoListComponent } from './demos/todo-list/todo-list.component';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider = [
  BarServices
]

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormartPipe,
    TodoListComponent,
    
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRouterConfig,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: ''
    }),
    TodoModule
  ],
  providers: [
    ProdutosService,
    AuthGuard,
    BAR_PROVIDERS
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
