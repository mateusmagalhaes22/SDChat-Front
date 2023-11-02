import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MensagensComponent } from './mensagens/mensagens.component';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule,
    MensagensRoutingModule
  ]
})
export class MensagensModule { }
