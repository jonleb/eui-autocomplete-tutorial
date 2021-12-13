import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { EuiAllModule } from '@eui/components';

@NgModule({
    imports: [
        EuiAllModule,
        TranslateModule,
    ],
    declarations: [
    ],
    exports: [
        EuiAllModule,
        TranslateModule,
    ]
})
export class SharedModule {}
