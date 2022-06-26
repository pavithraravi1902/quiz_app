import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public correctAnswer: number=0;
  constructor() { }

  ngOnInit(): void {
    this.correctAnswer = Number(localStorage.getItem("correctAnswer")!);
  console.log(this.correctAnswer);
  }

}
