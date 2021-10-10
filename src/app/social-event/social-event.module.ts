import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialEventComponent } from './components/social-event/social-event.component';
import {SocialEventRoutingModule} from './social-event-routing.module';
import {PackageComponent} from './components/package/package.component';
import {ServicesPackageComponent} from './components/services-package/services-package.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SocialEventComponent,PackageComponent, ServicesPackageComponent],
  imports: [
    CommonModule,
    SocialEventRoutingModule,
    SharedModule,
  ]
})
export class SocialEventModule { }
