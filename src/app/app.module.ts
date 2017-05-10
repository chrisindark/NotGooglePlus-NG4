import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppBootstrapModule } from './app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/navbar.component';
import { HomeComponent } from './dashboard/home.component';
import { FormComponent } from './dashboard/form.component';
import { RegisterComponent } from './dashboard/register.component';
import { LoginComponent } from './dashboard/login.component';
import { PostComponent } from './post/post.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppBootstrapModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PostComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
