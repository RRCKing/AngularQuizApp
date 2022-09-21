import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor (private http: HttpClient) {}

    getQuestions(quizId: number) {
        return this.http.get(`https://localhost:44300/api/questions/${quizId}`);        
    }

    getQuizzes() {
        return this.http.get('https://localhost:44300/api/quizzes');        
    }

    postQuestion(question: string) {
        this.http.post('https://localhost:44300/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question: any) {
        this.http.put(`https://localhost:44300/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        })
    }

    postQuiz(quiz: any) {
        this.http.post('https://localhost:44300/api/quizzes', quiz).subscribe(res => {
            console.log(res);
        })
    }

    putQuiz(quiz: any) {
        this.http.put(`https://localhost:44300/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        })
    }

    selectQuestion(question: string) {
        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz: string) {
        this.selectedQuiz.next(quiz);
    }
}