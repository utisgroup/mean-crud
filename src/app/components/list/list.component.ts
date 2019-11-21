import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/country.service';
import { Country } from '../../country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private countryList: Country[];
  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this.readCountries();
  }

  readCountries() {
    this._countryService.readCountry().subscribe((res: any) => {
       this.countryList = res['message'];
       console.log('Country List =', this.countryList);
    },
    error => {
      console.log('Something went wrong...');
    });
  }
}
