import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMlek1PGu7Tj_FeXzdSlGJE8dnC9jvSB8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
