import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteMetadataComponent } from './quote-metadata/quote-metadata.component';
import { PostDurationPipe } from './post-duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteMetadataComponent,
    PostDurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
