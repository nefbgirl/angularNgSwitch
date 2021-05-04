import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicePrintComponent } from './device-print/device-print.component';
import { DeviceListComponent } from './device-list/device-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MatTableModule } from '@angular/material/table';

const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: DeviceListComponent },
  { path: 'detail/:id', component: DeviceDetailsComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
    DevicePrintComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //MaterialModule,
    MatTableModule,
    SignaturePadModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
