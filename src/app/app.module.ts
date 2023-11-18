import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services//auth.service';
import { PhotoService } from './services/photo.service';
import { BackgroundService } from '../app/services/background.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    PhotoService,
    BackgroundService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
