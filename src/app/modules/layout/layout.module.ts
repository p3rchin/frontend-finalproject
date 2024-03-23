import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { OptionClientComponent } from './components/option-client/option-client.component';
import { CreateHomologationComponent } from './components/create-homologation/create-homologation.component';
import { FirststepHomologationComponent } from './components/firststep-homologation/firststep-homologation.component';
import { SecondstepHomologationComponent } from './components/secondstep-homologation/secondstep-homologation.component';
import { CardviewHomologationComponent } from './components/cardview-homologation/cardview-homologation.component';
import { ThirdstepHomologationComponent } from './components/thirdstep-homologation/thirdstep-homologation.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepeatCardComponent } from './components/repeat-card/repeat-card.component';


@NgModule({
  declarations: [
    LayoutComponent,
    OptionClientComponent,
    CreateHomologationComponent,
    FirststepHomologationComponent,
    SecondstepHomologationComponent,
    CardviewHomologationComponent,
    ThirdstepHomologationComponent,
    ViewProfileComponent,
    RepeatCardComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
