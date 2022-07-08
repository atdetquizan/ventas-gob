import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Clientes } from './clientes.constant';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  host: {
    class: 'page-content'
  }
})
export class ClientesComponent implements OnInit {
  hoy = new Date();

  name = '';

  edad = 15;
  clientes: any[] = Clientes;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onClickEliminar(cliente: any) {
    console.log(cliente);
  }

  condicionEdad() {
    return this.edad > 18;
  }
  // getYears(fechaNacimiento: string) {
  //   const nacimiento = moment(fechaNacimiento, 'DD/MM/YYYY');
  //   const hoy = moment();

  //   return hoy.diff(nacimiento, 'years');
  // }

  // concatFullName(): string {
  //   return this.cliente.nombre + ' ' + this.cliente.apellidos;
  // }
}
