import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, 'Love for all, hatred for none','-Margot Wale',0,0, new Date(2021,3,23),'Edwin',false),
    new Quote(2, 'For all the kids that dream the impossible','-Lewis Hamilton',0,0, new Date(2021,3,23), 'Joy',false),
    new Quote(3, 'First you have to finish','-Michael Schumacher',0,0, new Date(2021,3,23), 'Phil',false),
    new Quote(4, 'Race cars become beautiful when they win','-Enzo Ferrari',0,0, new Date(2021,3,23), 'Sky',false),
  ]

  toggleDetails(index: number){
    this.userQuotes[index].showMeta = !this.userQuotes[index].showMeta;
  }

  quoteDelete(isDeleted: any,index: number){
    if (isDeleted){
      this.userQuotes.splice(index,1);

    }
  }

  addNewQuote(quote: Quote){
    let quotesLength = this.userQuotes.length;
    quote.quoteID=quotesLength+1;
    
    this.userQuotes.push(quote)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
