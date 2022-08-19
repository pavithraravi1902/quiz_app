import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const quizRoutes: Routes = [{
   path: '', redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "thank-you", component: ThankYouComponent
}];

@NgModule({
  imports: [RouterModule.forChild(quizRoutes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
