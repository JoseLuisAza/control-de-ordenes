import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewItemComponent } from './new-item/new-item.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [  
  {
    path:'',
    component: ProfileComponent
  },
  {
    path:'newItem',
    component: NewItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
