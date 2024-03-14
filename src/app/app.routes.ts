import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
    {
    path: "auth", 
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
},
{
    path: "admin", 
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
},
{
    path: "student", 
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }