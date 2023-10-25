import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path : 'home', component: HomeComponentComponent},
 {path: 'details', component: DetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
