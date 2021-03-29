import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteMetadataComponent } from './quote-metadata/quote-metadata.component';
import { PostDurationPipe } from './post-duration.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighestDirective } from './highest.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteMetadataComponent,
    PostDurationPipe,
    QuoteFormComponent,
    HighestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
