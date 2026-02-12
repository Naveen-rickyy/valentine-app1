import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValentineComponent } from './valentine/valentine.component';

export const routes: Routes = [
  { path: 'valentine', component: ValentineComponent },
   { path: '', redirectTo: 'valentine', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
