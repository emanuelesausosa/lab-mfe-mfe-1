import { NgModule } from '@angular/core';
import { TtMfeMfeOneComponent } from './tt-mfe-mfe-one.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    TtMfeMfeOneComponent
  ],
  declarations: [
    TtMfeMfeOneComponent,
    GreetingsComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class TtMfeMfeOneModule { }
