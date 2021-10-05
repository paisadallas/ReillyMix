import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ScreenComponent} from "./screen/screen.component";

const routes: Routes = [

  //Production
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m =>m.HomeModule)
  },

  {
    path:'',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
 
  {
    path:'nightClubs',
    loadChildren: () => import('./night/night.module').then(m => m.NightModule)
  },

  {
    path:'weeklyPictures',
    loadChildren: () => import('./weekly-pictures/weekly-pictures.module').then(m => m.WeeklyPicturesModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'admin/discos',
    loadChildren: () => import('./weekly-pictures-admin/weerkly-admin.module').then(m => m.WeerklyAdminModule)
  }


// Screem

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
