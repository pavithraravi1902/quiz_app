import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  public inputName: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
