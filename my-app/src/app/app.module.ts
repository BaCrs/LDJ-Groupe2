import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { CapsuleDetailComponent } from './capsule-detail/capsule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleComponent,
    CapsuleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
