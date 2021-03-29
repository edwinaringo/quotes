import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

import { Quote } from '../quote'
@Component({
  selector: 'app-quote-metadata',
  templateUrl: './quote-metadata.component.html',
  styleUrls: ['./quote-metadata.component.css']
})
export class QuoteMetadataComponent implements OnInit {

  @Input() quote:Quote | undefined;
  @Output() isDeleted = new EventEmitter <boolean> ();

  quoteDelete(deleted:boolean){
    this.isDeleted.emit(deleted);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
