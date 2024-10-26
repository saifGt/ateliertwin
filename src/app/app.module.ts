import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FirstLettreUpperPipe } from './first-lettre-upper.pipe';
import { TestDirective } from './test.directive';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HeaderappComponent } from './shared/headerapp/headerapp.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailesProductsComponent } from './core/manageProduct/detailes-products/detailes-products.component';
import { UserModule } from './core/user/user.module';
import { ProductManageModule } from './product-manage/product-manage.module';
import { FormsComponent } from './core/manageProduct/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    FirstLettreUpperPipe,
    TestDirective,
    ListcategoriesComponent,
    NotfoundComponent,
    HeaderappComponent,
    FooterComponent,
    LoginComponent,
    DetailesProductsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
