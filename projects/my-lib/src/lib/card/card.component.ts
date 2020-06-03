import { Component, OnInit, ContentChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ContentChild(HeaderComponent, {static: false}) header: HeaderComponent|null = null;

  constructor() { }

  ngOnInit() {
  }

}
