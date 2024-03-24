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
import { StudentsviewComponent } from './components/studentsview/studentsview.component';
import { StudentsComponent } from './pages/students/students.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramsviewComponent } from './components/programsview/programsview.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HomologationsComponent,
    TestGraphicComponent,
    HomologationsviewComponent,
    StudentsviewComponent,
    StudentsComponent,
    ProgramsComponent,
    ProgramsviewComponent,

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
