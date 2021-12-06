import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'screen/home', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: './features/home/home.module#Module' },
    { path: 'tutorials/eui-autocomplete-tutorial',
        loadChildren: './features/eui-autocomplete-tutorial/eui-autocomplete-tutorial.module#EuiAutocompleteTutorialModule'
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}
