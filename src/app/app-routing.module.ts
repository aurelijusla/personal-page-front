import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CheatsheetContainerComponent } from './components/cheatsheet-container/cheatsheet-container.component';
import { CheatsheetDetailComponent } from './components/cheatsheet-container/cheatsheet-detail/cheatsheet-detail.component';


const routes: Routes = [{
  path: 'cheatsheet',
  component: CheatsheetContainerComponent 
},
// {
//   path: 'cheatsheet/:name',
//   component: CheatsheetDetailComponent // TODO: check if all ok here
// },
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
