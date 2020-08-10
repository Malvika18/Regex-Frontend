import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegexHomeComponent } from './regex-home/regex-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegexLoginComponent } from './regex-login/regex-login.component';
import { RegexChangePasswordComponent } from './regex-change-password/regex-change-password.component';
import { RegexEmailComponent } from './regex-email/regex-email.component';
import { RegexVarificationComponent } from './regex-varification/regex-varification.component';


@NgModule({
  declarations: [
    AppComponent,
    RegexHomeComponent,
    RegexLoginComponent,
    RegexChangePasswordComponent,
    RegexEmailComponent,
    RegexVarificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
