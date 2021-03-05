import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './capsule/capsule.component';
import { LaunchComponent } from './launch/launch.component';
import { CapsuleDetailComponent } from './capsule-detail/capsule-detail.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/capsules', pathMatch: 'full' },
  { path: 'capsules', component: CapsuleComponent },
  { path: 'capsules/:id', component: CapsuleDetailComponent },
  { path: 'launches', component: LaunchComponent },
  { path: 'launches/:id', component: LaunchDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }