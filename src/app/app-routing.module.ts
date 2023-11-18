// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Add AuthGuard

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'photo-list', component: PhotoListComponent, canActivate: [AuthGuard] }, // Use AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
