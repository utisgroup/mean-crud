import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../country';
import { CountryService } from '../../shared/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
  }

  newCountry(event: any) {
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/createUpdate']);
  }

  signupForm() {
    this.router.navigate(['/signup']);
  }

}
