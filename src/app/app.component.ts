import { Component, AfterViewInit } from '@angular/core';
import { QuestionClass } from './QuestionClass';
import { HttpClient } from "@angular/common/http";
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  constructor(private http: HttpClient) {
    this.http.get('assets/output.csv', { responseType: 'text' })
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          csvToRowArray=this.shuffle(csvToRowArray);

          let count = 0;
          csvToRowArray.forEach(element => {
            count++;
            let row = element.split(";");
            this.questions.push(new QuestionClass(count + ". " + row[0], [row[1], row[2], row[3], row[4]], parseInt(row[5])));
            console.log(this.questions);
          });
        },
        error => {
          console.log(error);
        }
      );
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }



  title = 'baba';

  QuestionsHTML: string = "";

  questions: QuestionClass[] = [];

  allQuestions: QuestionClass[] = [];







}
