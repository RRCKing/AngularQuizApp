import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {NavComponent} from './nav.component'
import { QuizComponent } from './quiz.component'; 
import { QuizzesComponent } from './quizzes.component'; 

const routes = [
  {path: '', component: HomeComponent},
  {path: 'question', component: QuestionComponent}, 
  {path: 'question/:quizId', component: QuestionComponent}, 
  {path: 'questions', component: QuestionsComponent}, 
  {path: 'quiz', component: QuizComponent} 
]


@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
