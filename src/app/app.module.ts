import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { MainHeaderComponentComponent } from './components/main-header-component/main-header-component.component';
import { MainFooterComponentComponent } from './components/main-footer-component/main-footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponentComponent,
    MainFooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
