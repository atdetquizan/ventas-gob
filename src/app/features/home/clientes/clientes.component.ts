import { Component, OnInit } from '@angular/core';
import moment from 'moment';
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
  cliente = {
    nombre: 'FORMATIVA',
    apellidos: 'APELLIDO',
    fechaNacimiento: '27/02/1993',
    total1: 100.39123123,
    total2: 200.2012312,
    foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

  // getYears(fechaNacimiento: string) {
  //   const nacimiento = moment(fechaNacimiento, 'DD/MM/YYYY');
  //   const hoy = moment();

  //   return hoy.diff(nacimiento, 'years');
  // }

  concatFullName(): string {
    return this.cliente.nombre + ' ' + this.cliente.apellidos;
  }
}
