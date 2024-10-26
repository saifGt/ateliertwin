import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';

const routes: Routes = [
  {path:'prod',component:ProductmanagerComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManageRoutingModule { }
