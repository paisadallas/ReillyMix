import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ScreenComponent} from "./screen/screen.component";

const routes: Routes = [

  //Production
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m =>m.HomeModule)
  },

  // {
  //   path:'',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },

  // {
  //   path:'',
  //   loadChildren: () => import('./night/night.module').then(m => m.NightModule)
  // },
  //Screem
//   {path:'',
//   component: ScreenComponent,
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
