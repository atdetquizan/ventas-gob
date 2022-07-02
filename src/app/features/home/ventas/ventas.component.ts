import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  host: {
    class: 'page-content bg-red'
  }
})
export class VentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
