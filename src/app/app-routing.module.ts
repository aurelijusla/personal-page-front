import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';


const routes: Routes = [{
  path: 'cheatsheet',
  component: CheatsheetComponent 
},
{
  path: '',
  component: AboutComponent 
},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
