import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuizApplicationModule } from './quiz/quiz-application/quiz-application.module';


@NgModule({
  declarations: [ ],
  imports: [QuizApplicationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
