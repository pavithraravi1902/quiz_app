import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  declarations: [AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ThankYouComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuizRoutingModule
  ]
})
export class QuizApplicationModule { }
