import { Component, OnInit, Input } from '@angular/core';
import { IimagenTarjeta } from './IimagenTarjeta';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
   @Input() imagen: IimagenTarjeta = {
    src:  "",
    class:  ""
    }
  constructor() { }

  ngOnInit(): void {
  }

}



