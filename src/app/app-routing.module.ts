import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "thank-you", component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
