import { Component, Inject, OnInit, inject } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    {provide: BarServices, useClass: BarServicesMock}
  ]
})
export class BarDiZonesComponent implements OnInit {

  ConfigManual: BarUnidadeConfig
  Config: BarUnidadeConfig
  barBebida1: string


  constructor(private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
  ) { } 
  

  ngOnInit(): void {
      this.barBebida1 = this.barServices.obterBebidas()
      this.ConfigManual = this.ApiConfigManual
      this.Config = this.ApiConfig
    
  }
}
