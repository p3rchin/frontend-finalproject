import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomologationsComponent } from './pages/homologations/homologations.component';

const routes: Routes = [{
  path: "",
  component: AdminComponent, children: [
    {
      path: "dashboard",
      component: DashboardComponent
    },
    {
      path: "homologations",
      component: HomologationsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
