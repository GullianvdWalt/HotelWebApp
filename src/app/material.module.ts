import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    imports: [
         MatBadgeModule,
         MatButtonModule,
         MatSliderModule,
         MatIconModule,
         MatRadioModule,
         NoopAnimationsModule,
         MatToolbarModule,
         MatListModule,
         MatSidenavModule,
         MatTabsModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatSliderModule,
        MatIconModule,
        MatRadioModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatTabsModule
    ]
})


export class MaterialModule {}
