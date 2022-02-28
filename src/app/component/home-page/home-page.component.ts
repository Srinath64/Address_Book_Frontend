import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/model/address-book';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public personDetails: AddressBook[] = [];

  constructor(private httpService: HttpService, 
              private router: Router,
              private dataService: DataService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.httpService.getAddressBookData().subscribe(data => {
      this.personDetails = data.data;
      console.log(this.personDetails);
    } );
  }

  remove(id: number): void {
    console.log(id);
    this.httpService.deleteContact(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
      this.snackBar.open('Contact Deleted Successfully!', 'Dismiss', {duration: 4000, verticalPosition: 'top'});
    });
  }

}
