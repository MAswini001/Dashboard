import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user/user.component';
import { UsereditComponent } from './useredit/useredit.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard ],
    children:[
      {
      path:'',
      component:DashboardDataComponent
      },
      {
        path:"Users",
        component: UserComponent,
        children:[
          
          {
            path:"list",
            component:UserListComponent
          },
          {
            path:"create",
            component:UserCreateComponent
          },
          {
            path:"edit/:id",
            component:UsereditComponent
          },
          {
            path:"view/:id",
            component:UserViewComponent
          }
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
