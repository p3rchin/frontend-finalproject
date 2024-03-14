import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { OptionClientComponent } from './components/option-client/option-client.component';
import { FirststepHomologationComponent } from './components/firststep-homologation/firststep-homologation.component';
import { SecondstepHomologationComponent } from './components/secondstep-homologation/secondstep-homologation.component';
import { CreateHomologationComponent } from './components/create-homologation/create-homologation.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CardviewHomologationComponent } from './components/cardview-homologation/cardview-homologation.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'option',
  pathMatch: 'full',
}, {
  path: "",
  component: LayoutComponent,
  children: [
    {
      path: "option",
      component: OptionClientComponent
    },
    {
      path: "viewprofile",
      component: ViewProfileComponent
    },
    {
      path: "createhomologation",
      component: CreateHomologationComponent
    },
    {
      path: "cardview",
      component: CardviewHomologationComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
