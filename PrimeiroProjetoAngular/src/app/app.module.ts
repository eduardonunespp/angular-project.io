import { NgModule } from '@angular/core';
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

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './demos/reactForms/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutosService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
