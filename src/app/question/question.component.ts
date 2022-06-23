import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public counter: number = 60;
  public correctAnswer: number = 0;
  public incorrectAns: number = 0;
  public progress: string = "0";
  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.service.getQuestionJson().subscribe(res => {
      this.questionList = res.questions
      console.log(this.questionList[0]);
    })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(CurrentQno: number, option: any): any {
    if (option.correct && this.currentQuestion < 10) {
      this.points += 10;
      this.currentQuestion++;
      this.correctAnswer++;
      this.getProgress();
    } else {
      this.currentQuestion++;
      this.incorrectAns++;
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
}
