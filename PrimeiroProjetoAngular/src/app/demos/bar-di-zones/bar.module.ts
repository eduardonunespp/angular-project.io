import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarDiZonesComponent } from "./bar-di-zones.component";
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from "./bar.config";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarDiZonesComponent
  ],
  exports: [
    BarDiZonesComponent
  ]
})
export class BarModule {

  static forRoot(config: BarUnidadeConfig): ModuleWithProviders<any> {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config }
      ]
    }
  }

  static forChild(){

  }

}