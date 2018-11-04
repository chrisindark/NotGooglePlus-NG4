import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor, ErrorInterceptor } from './app.http-interceptor';

import { SharedModule } from './shared';

import { AppComponent } from './app.component';


export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'MM/DD/YYYY',
    containerClass: 'theme-blue',
  });
}

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),

    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: BsDatepickerConfig,
      useFactory: getDatepickerConfig
    },
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [],
  exports: []
})

export class AppModule {}
