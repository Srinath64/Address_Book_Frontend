import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any

  constructor(private httpService: HttpService,
              private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.httpService.login(this.username, this.password);
    resp.subscribe((data) => {  
      this.message = data;
     this.router.navigate(["/home-page"])
    });
  }

}
