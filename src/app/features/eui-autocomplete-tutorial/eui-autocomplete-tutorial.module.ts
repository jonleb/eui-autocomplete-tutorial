import { NgModule } from '@angular/core';
import { EuiAutocompleteTutorialRoutingModule } from './eui-autocomplete-tutorial-routing.module';
import { EuiAutocompleteTutorialComponent } from './eui-autocomplete-tutorial.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        EuiAutocompleteTutorialRoutingModule,
    ],
    declarations: [
        EuiAutocompleteTutorialComponent,
    ],
})
export class EuiAutocompleteTutorialModule {
}
