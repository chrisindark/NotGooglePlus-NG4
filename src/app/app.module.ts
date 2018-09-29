import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
// import { TokenInterceptor } from './app.http-interceptor';
import { SharedModule } from './shared/shared.module';

import { AppHttpService } from './shared/app-http.service';

// import { HomeModule } from './home';
// import { PostsModule } from './posts';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),

    AppRoutingModule,
    SharedModule.forRoot(),
    // HomeModule,
    // PostsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // {
      // provide: HTTP_INTERCEPTORS,
      // useClass: TokenInterceptor,
      // multi: true,
    // }
  ],
  bootstrap: [ AppComponent ],
  exports: [

  ]
})

export class AppModule {}
