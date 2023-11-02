import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule,
    MensagensRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MensagensModule {

}
