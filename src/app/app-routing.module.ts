import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'foodandbeverage', redirectTo: 'food-and-beverage', pathMatch: 'full'},
  { path: 'lifestyle', component: LifestyleComponent},
  { path: 'weddings', component: WeddingsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
