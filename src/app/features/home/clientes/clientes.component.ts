import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  host: {
    class: 'page-content bg-green'
  }
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
