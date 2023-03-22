import { Component, Inject, Injector, OnInit, inject } from '@angular/core';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    // {provide: BarServices, useClass: BarServicesMock},
    {
      provide: BarServices, useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    },
    {
      provide: BebidaService, useExisting: BarServices
    }
  ]
})
export class BarDiZonesComponent implements OnInit {

  ConfigManual: BarUnidadeConfig
  Config: BarUnidadeConfig
  barBebida1: string
  barBebida2: string
  dadosUnidade: string


  constructor(private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
  ) { } 
  

  ngOnInit(): void {
      this.barBebida1 = this.barServices.obterBebidas()
      this.ConfigManual = this.ApiConfigManual
      this.Config = this.ApiConfig

      this.dadosUnidade = this.barServices.obterUnidade()
      this.barBebida2 = this.barServices.obterBebidas()
    
  }
}
