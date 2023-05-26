import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  /*esses valores podem ser inputados --> passado para cá, não eu que irei colocar, para isso eu coloco o @Input */
  /*E eu inputo as informações de onde meu componente <app-big-card> está sendo chamado --> pages*/
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
