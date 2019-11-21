import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';
import { CountryService } from './shared/country.service';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'createUpdate', component: CreateUpdateComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
