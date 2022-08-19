import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './quiz/quiz-application/components/question/question.component';
import { ThankYouComponent } from './quiz/quiz-application/components/thank-you/thank-you.component';
import { WelcomeComponent } from './quiz/quiz-application/components/welcome/welcome.component';

const routes: Routes = [
  /*{ path: '', redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "thank-you", component: ThankYouComponent }*/
  {path: "quiz",
  loadChildren: ()=> import ('./quiz/quiz-application/quiz-application.module').then(m =>m.QuizApplicationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
