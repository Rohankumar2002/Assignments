import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { FooterComponent } from './footer/footer.component';
// import { ShoesComponent } from './shoes/shoes.component';
// import { AccessoriesComponent } from './accessories/accessories.component';
// import { ClothingComponent } from './clothing/clothing.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // ProductDetailsComponent,
    // HomeComponent,
    // RegisterComponent,
    // LoginComponent,
    // ContactusComponent,
    // FooterComponent,
    // ShoesComponent,
    // AccessoriesComponent,
    // ClothingComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
