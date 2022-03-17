import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabMfeOneComponent } from './lab-mfe-one.component';
import { TtMfeMfeOneModule } from '../../../projects/tt-mfe-mfe-one/src/lib/tt-mfe-mfe-one.module';



@NgModule({
  declarations: [
    LabMfeOneComponent
  ],
  imports: [
    CommonModule,
    TtMfeMfeOneModule
  ]
})
export class LabMfeOneModule { }
