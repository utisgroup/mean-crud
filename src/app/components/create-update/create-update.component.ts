import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.sass']
})
export class CreateUpdateComponent implements OnInit {

  public country: Country;

  constructor(public router: Router, public countryService: CountryService) { }

  ngOnInit() {
    this.country = this.countryService.getter();
  }

  createOrUpdate() {
    this.countryService.createCountry(this.country).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/']); 
    },
    error => {
      console.log(error); 
    }
    )
  }

}
