import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { countReset } from 'console';

export type Question = {
  id: number;
  question: string;
  answer: string;
  option: Array<string>;
  correct: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name: string = "";
  public questionList: any = [];
  public unansweredQuestion: any = [];
  public answeredQuestion: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public correctAnswer: number = 0;
  public incorrectAns: number = 0;
  public progress: string = "0";
  public istrue: any = null;
  public counter: number = 60
  public time: any;

  constructor(private service: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.myTimer();
    this.time = setInterval(() => this.myTimer(), 1000);
    //console.log("timer",this.time);
  }
  getAllQuestions() {
    this.service.getQuestionJson().subscribe(res => {
      this.questionList = res.questions
      // console.log(this.questionList[0]);
    })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    // this.currentQuestion--;
  }
  answerTrack(id: number, option: any) {
    if (option.correct) {
      this.istrue = true;
    } else if (!option.correct) {
      this.istrue = false;
    }
    //console.log(this.istrue);
  }
  answer(CurrentQno: number, option: any): any {
    if (this.currentQuestion <= 8) {
      if (option.correct) {
        this.points += 10;
        this.currentQuestion++;
        this.correctAnswer++;

        this.getProgress();
        // console.log(this.correctAnswer);
        //this.router.navigate(["thank-you"]);
      } else {
        this.currentQuestion++;
        this.incorrectAns++;
      }
    }
  }
  getProgress() {
    this.progress = ((this.correctAnswer / this.questionList.length) * 100).toString();
    return this.progress;
  }
  refresh() {
    this.currentQuestion = 0;
    this.progress = "0";
    this.points = 0;
  }
  navigate() {
    if (this.currentQuestion > 9) {
      this.router.navigate(["thank-you"])
    }
  }

  myTimer() {
    if (this.currentQuestion < 9) {
      this.counter + "sec left";
      this.counter--;
      if (this.counter == -1) {
        clearInterval(this.time);
        alert("Time out!! :(");
      };
    }
  }
}
