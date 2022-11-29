import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './shared/master/master.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthModule } from 'projects/auth/src/public-api';
import { jwtInterceptorProvider } from 'projects/auth/src/lib/interceptors/jwt.interceptor';
import { errorInterceptorProvider } from 'projects/auth/src/lib/interceptors/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ReceiverFormComponent } from './shared/home/receiver-form/receiver-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankService } from './services/bank.service';
import { TransfersComponent } from './shared/transfers/transfers.component';
import { TransferFormComponent } from './shared/transfers/transfer-form/transfer-form.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HomeComponent,
    ReceiverFormComponent,
    TransfersComponent,
    TransferFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    jwtInterceptorProvider,
    errorInterceptorProvider,
    BankService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
