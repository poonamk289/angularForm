import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './protectedRoutes/auth.guard';
import { SignComponent } from './sign/sign.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
const routes: Routes = [
          {
            path: 'profile',
            component:ProfileComponent,
            canActivate:[authGuard]
          },
          {
            path:'home',
            component:HomeComponent
          },
    
          {
            path: 'sign',
            component :SignComponent

          },

          {
            path: 'reactiveForm',
            component: ReactiveFormComponent
          }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
