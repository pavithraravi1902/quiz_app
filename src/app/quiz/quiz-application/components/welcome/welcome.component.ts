import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  public user_name:any ;

  constructor(private route: ActivatedRoute, private router: Router) {
  console.log(this.user_name);
  }

  ngOnInit(): void {
  }
  startQuiz() {
    localStorage.setItem("inputName", this.nameKey.nativeElement.value);
  }

  onClick() {
    if (this.user_name == null) {
      alert("please enter your name");
      this.router.navigate(["/welcome"]);
    } else {
      this.router.navigate(["/question"]);
    }
  }
}
