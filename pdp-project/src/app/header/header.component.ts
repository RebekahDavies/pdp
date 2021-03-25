import { Component, OnInit } from '@angular/core';
import {JwtService} from '../jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: JwtService) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.auth.loggedIn;
  }

  login(email: string, password: string) {
    this.auth.login(email, password).subscribe((accessToken) => console.log('Hellow user with token: ' + accessToken));
  }

  signUp(email: string, passowrd: string){
    this.auth.register(email, passowrd);
  }
}

