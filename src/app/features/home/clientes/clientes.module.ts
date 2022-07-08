import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalleComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ClientesModule { }
