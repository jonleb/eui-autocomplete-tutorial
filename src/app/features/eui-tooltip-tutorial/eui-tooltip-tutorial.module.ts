import { NgModule } from '@angular/core';
import { EuiTooltipTutorialRoutingModule } from './eui-tooltip-tutorial-routing.module';
import { EuiTooltipTutorialComponent } from './eui-tooltip-tutorial.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        EuiTooltipTutorialRoutingModule,
    ],
    declarations: [
        EuiTooltipTutorialComponent,
    ],
})
export class Module {
}
