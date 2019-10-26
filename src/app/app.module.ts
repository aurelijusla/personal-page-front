import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CheatsheetContainerComponent } from './components/cheatsheet-container/cheatsheet-container.component';
import { CheatsheetSidenavComponent } from './components/cheatsheet-container/cheatsheet-sidenav/cheatsheet-sidenav.component';
import { CheatsheetDetailComponent } from './components/cheatsheet-container/cheatsheet-detail/cheatsheet-detail.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        CheatsheetContainerComponent,
        CheatsheetSidenavComponent,
        CheatsheetDetailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
