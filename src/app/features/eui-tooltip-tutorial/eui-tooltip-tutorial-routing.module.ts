import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuiTooltipTutorialComponent } from './eui-tooltip-tutorial.component';

const routes: Routes = [
    { path: '', component: EuiTooltipTutorialComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: EuiTooltipTutorialComponent }
        ])
    ],
})
export class EuiTooltipTutorialRoutingModule {}
