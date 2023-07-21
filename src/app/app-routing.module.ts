import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login/login1/login1.component';
import { SignupComponent } from './login/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddaccidentComponent } from './user/addaccident/addaccident.component';
import { BookumblenceComponent } from './user/bookumblence/bookumblence.component';
import { AwarenessComponent } from './user/awareness/awareness.component';

const routes: Routes = [
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'login',component:LoginComponent,
  children:
  [
    {
      path:'login1',component:Login1Component
    },
    {
     path:'signup',component:SignupComponent
    }
  ]
},
{
  path:'user',component:UserComponent,
  children:
  [
    {
      path:'',component:ProfileComponent
    },
    {
      path:'addacc',component:AddaccidentComponent
    },
    {
      path:'bookamb',component:BookumblenceComponent
    },
    {
      path:'aware',component:AwarenessComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
