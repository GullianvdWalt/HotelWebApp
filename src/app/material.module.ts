import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {Component} from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatSliderModule],
    exports: [MatBadgeModule, MatButtonModule]
})

export class MaterialModule{}