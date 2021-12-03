import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuiAutocompleteTutorialComponent } from './eui-autocomplete-tutorial.component';

const routes: Routes = [
    { path: '', component: EuiAutocompleteTutorialComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: EuiAutocompleteTutorialComponent }
        ])
    ],
})
export class EuiAutocompleteTutorialRoutingModule {}
