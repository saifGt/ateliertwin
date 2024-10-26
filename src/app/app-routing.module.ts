import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailesProductsComponent } from './core/manageProduct/detailes-products/detailes-products.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './core/manageProduct/forms/forms.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'detail/:idt',component:DetailesProductsComponent},
  {path:'first', component: FirstComponent },
  {path:'login', component:   LoginComponent },
  {path:'product',component:ListcategoriesComponent,children:[
    {path: 'detail/:idt',component:DetailesProductsComponent},
  ]
  },
  {path:'lazy',loadChildren:()=>import('./core/user/user.module').then((m)=>(m.UserModule))},
  {path:'prodmanager',loadChildren:()=>import('./product-manage/product-manage.module').then((m)=>(m.ProductManageModule))},

  {path: 'detail/:idt',component:DetailesProductsComponent},
  {path:'products',component:ListcategoriesComponent},
  {path:'form',component:FormsComponent},

  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
