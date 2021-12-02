import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialEventComponent } from './components/social-event/social-event.component';
import {SocialEventRoutingModule} from './social-event-routing.module';
import {PackageComponent} from './components/package/package.component';
import {ServicesPackageComponent} from './components/services-package/services-package.component';
import {SharedModule} from '../shared/shared.module';
import {ExtrasComponent} from './components/extras/extras.component';
import {ServicesExtrasComponent} from './components/services-extras/services-extras.component';
import { DjServicesComponent } from './components/dj-services/dj-services.component';
import { PhotoBookComponent } from './components/photo-book/photo-book.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { VideoComponent } from './components/video/video.component';
import { PhotoBookPackageComponent } from './components/photo-book-package/photo-book-package.component';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
import {IvyCarouselModule} from './../ivyсarousel_pro/carousel.module';
@NgModule({
  declarations: [
    SocialEventComponent,
    PackageComponent, 
    ServicesPackageComponent,
     ExtrasComponent, 
     ServicesExtrasComponent, DjServicesComponent, PhotoBookComponent, PhotographyComponent, VideoComponent, PhotoBookPackageComponent],
  imports: [
    CommonModule,
    SocialEventRoutingModule,
    SharedModule,
    IvyCarouselModule
  ]
})
export class SocialEventModule { }
