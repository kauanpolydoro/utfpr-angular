import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ClassNamePorNaipePipe } from './pipes/class-name-por-naipe.pipe';
import { SuitAndValueSelectComponent } from './components/suit-and-value-select/suit-and-value-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClassNamePorNaipePipe,
    SuitAndValueSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
