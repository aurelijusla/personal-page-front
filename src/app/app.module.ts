import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CheatsheetItemComponent } from './components/cheatsheet/cheatsheet-item/cheatsheet-item.component';
import { CheatsheetSidenavComponent } from './components/cheatsheet/cheatsheet-sidenav/cheatsheet-sidenav.component';

import { MaterialModule } from './material/material.module';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { AboutComponent } from './components/about/about.component';



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
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
