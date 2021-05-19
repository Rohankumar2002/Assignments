import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent},
  // {path:'contactus',component:ContactusComponent},
  // {path:'products',component:ProductComponent,children:[
  //   {path:'shoes',component:ShoesComponent},
  //   {path:'accessories',component:AccessoriesComponent},
  //   {path:'clothing',component:ClothingComponent}
  // ]},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
