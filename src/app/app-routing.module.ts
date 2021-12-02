import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ScreenComponent} from "./screen/screen.component";

const routes: Routes = [

  //Production
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(m =>m.HomeModule)
  // },
 
  // {
  //   path:'nightClubs',
  //   loadChildren: () => import('./night/night.module').then(m => m.NightModule)
  // },
  // {
  //   path:'nightClubs-admin',
  //   loadChildren: () => import('./night-club/night-club.module').then(m => m.NightClubModule)
  // },

  // {
  //   path:'weeklyPictures',
  //   loadChildren: () => import('./weekly-pictures/weekly-pictures.module').then(m => m.WeeklyPicturesModule)
  // },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //   path: 'discos',
  //   loadChildren: () => import('./weekly-pictures-admin/weerkly-admin.module').then(m => m.WeerklyAdminModule)
  // },
  // {
  //   path:'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path:'social-events',
  //   loadChildren: () => import('./social-event/social-event.module').then(m => m.SocialEventModule)
    
  // }


// Screem

  {path:'',
  component: ScreenComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
