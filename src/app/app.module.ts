import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { CheatsheetItemComponent } from './components/cheatsheet/cheatsheet-item/cheatsheet-item.component';
import { CheatsheetSidenavComponent } from './components/cheatsheet/cheatsheet-sidenav/cheatsheet-sidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheatsheetSidenavComponent,
    CheatsheetItemComponent,
    CheatsheetComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
