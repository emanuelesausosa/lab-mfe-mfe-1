import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FootingComponent } from './footing/footing.component';
import {CoreModule} from "./core/core.module";
import {LabMfeOneModule} from "./lab-mfe-one/lab-mfe-one.module";
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FootingComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LabMfeOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
