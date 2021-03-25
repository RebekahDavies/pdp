import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

 @Output() signUp = new EventEmitter<{email: string, password: string}>();

}
