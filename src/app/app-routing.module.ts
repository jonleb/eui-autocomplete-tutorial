import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'screen/home', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: () => import('./features/home/home.module').then(m => m.Module) },
    { path: 'tutorials/eui-autocomplete-tutorial', loadChildren: () => import('./features/eui-autocomplete-tutorial/eui-autocomplete-tutorial.module').then(m => m.EuiAutocompleteTutorialModule) },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}
