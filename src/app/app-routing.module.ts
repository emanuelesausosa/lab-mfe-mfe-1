import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  redirectTo: "mfe-1",
  pathMatch: "full"
}, {
  path: "mfe-1",
  loadChildren: () => import("./lab-mfe-one/lab-mfe-one.module").then((m) => m.LabMfeOneModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
