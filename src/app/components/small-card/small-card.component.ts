import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://legadodamarvel.com.br/wp-content/uploads/2022/02/series-originais-da-marvel-na-netflix-podem-estar-deixando-a-plataforma-legadodamarvel.jpg";
  @Input()
  cardTitle:string = "NOVA SERIE ANUNCIADA"

  @Input()
  Id:string ="0"
  constructor() { }

  ngOnInit(): void {
  }

}
