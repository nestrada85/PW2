import { Component, OnInit } from '@angular/core';
import { IimagenTarjeta } from '../tarjetas/IimagenTarjeta';


@Component({
  selector: 'app-listado-tarjetas',
  templateUrl: './listado-tarjetas.component.html',
  styleUrls: ['./listado-tarjetas.component.css']
})
export class ListadoTarjetasComponent implements OnInit {
  listadoImagenes: IimagenTarjeta[]  = [
    {
      src:"https://sm.ign.com/ign_es/screenshot/default/202231152353-1_7dv3.jpg",
      class: "card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
    },
    {
      src:"https://geekositymag.com/wp-content/uploads/2022/07/Warner-Bros-Discovery-To-Announce-Henry-Cavills-Man-Of-Steel-2-01.jpg",
      class: "card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
    },
    {
      src:"https://i.blogs.es/0fd3fa/2017-wonder-woman-hd-to/1366_2000.jpg",
      class: "card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
