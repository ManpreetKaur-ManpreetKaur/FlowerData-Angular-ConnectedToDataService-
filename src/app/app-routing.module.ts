import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlowerDetailsComponent} from "./flower-details/flower-details.component";
import {FlowerIndexComponent} from "./flower-index/flower-index.component";

const routes: Routes = [
  {path: '', component: FlowerIndexComponent},
  {path: 'flowers/:id', component: FlowerDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
