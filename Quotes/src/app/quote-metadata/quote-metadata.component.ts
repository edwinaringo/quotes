import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-metadata',
  templateUrl: './quote-metadata.component.html',
  styleUrls: ['./quote-metadata.component.css']
})
export class QuoteMetadataComponent implements OnInit {

  @Input() quote:Quote | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
