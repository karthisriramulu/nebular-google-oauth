import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesModule } from './pages/pages.module';
import {AuthModule} from './auth/auth.module';
import {LoginService} from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    PagesModule,
    NbLayoutModule,
    
    AuthModule,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
