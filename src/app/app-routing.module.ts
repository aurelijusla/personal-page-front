import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CheatsheetContainerComponent } from './components/cheatsheet-container/cheatsheet-container.component';
import { CheatsheetDetailComponent } from './components/cheatsheet-container/cheatsheet-detail/cheatsheet-detail.component';

const routes: Routes = [
    {
        path: 'cheatsheet',
        component: CheatsheetContainerComponent,
        children: [{ path: ':name', component: CheatsheetDetailComponent }],
    },
    {
        path: 'about-me',
        component: AboutComponent,
    },
    {
        path: '',
        redirectTo: 'about-me',
        pathMatch: 'full',
    },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
