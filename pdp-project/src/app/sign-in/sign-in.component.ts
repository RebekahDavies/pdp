import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JwtService} from '../jwt.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() login = new EventEmitter<{email: string, password: string}>();

  ngOnInit(): void {
  }
}
