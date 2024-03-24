import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomologationsComponent } from './pages/homologations/homologations.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TestGraphicComponent } from './components/test-graphic/test-graphic.component';
import { HomologationsviewComponent } from './components/homologationsview/homologationsview.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HomologationsComponent,
    TestGraphicComponent,
    HomologationsviewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OverlayModule,
    NgApexchartsModule,
    FormsModule
  ]
})
export class AdminModule {



}
