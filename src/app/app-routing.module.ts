import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CallbackComponent} from "./core/callback/callback.component";
import {LayoutComponent} from "./layout/layout.component";
import {LabMfeOneModule} from "./lab-mfe-one/lab-mfe-one.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "coco",
        redirectTo: "/mfe-1",
        pathMatch: "full"
      }, {
        path: "mfe-1",
        loadChildren: () =>  LabMfeOneModule //import("./lab-mfe-one/lab-mfe-one.module").then((m) => m.LabMfeOneModule)
      }, {
        path: "cb",
        component: CallbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
