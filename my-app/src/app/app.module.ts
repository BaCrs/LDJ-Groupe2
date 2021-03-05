import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CapsuleComponent } from './capsule/capsule.component';
import { CapsuleDetailComponent } from './capsule-detail/capsule-detail.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleComponent,
    CapsuleDetailComponent,
    LaunchComponent,
    LaunchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
