import { Component, Input, OnInit } from '@angular/core';
import { QuestionClass } from 'src/app/QuestionClass';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  ngOnInit(): void {
   this.answers = this.question.Answers;
  }

  active: boolean = true;
  @Input() question: QuestionClass;
  answers: string[];
  correct: boolean;
  correctResult: string;


  sendResponce(index: number) {
    this.active = false;
    if(index==this.question.CorrectAnswer) {
      this.correct = true;
      this.correctResult = "Giusto, Brava Baba";
    }
    else {
      this.correct = false;
      this.correctResult = "Sbagliato, Baba bellissima, la risposta è la "  + (this.question.CorrectAnswer+1) + "°";
    }
  }





}
