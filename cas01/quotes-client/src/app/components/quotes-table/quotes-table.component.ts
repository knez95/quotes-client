import { Quote } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss']
})
export class QuotesTableComponent implements OnInit {

  @Input("quotes")
  quotes: Quote[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
