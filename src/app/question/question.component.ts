import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  public counter: number = 60;
  public correctAnswer: number = 0;
  public incorrectAns: number = 0;
  public progress: string = "0";
  public istrue: any = null;
  @ViewChild('correctAnswer') nameKey!: ElementRef;
  constructor(private service: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();

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
  startQuiz() {
    localStorage.setItem("correctAnswer", this.nameKey.nativeElement.value);
  }

}
