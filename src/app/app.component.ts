import { Component, AfterViewInit } from '@angular/core';
import { QuestionClass } from './QuestionClass';
import { HttpClient } from "@angular/common/http";
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


    constructor(private http: HttpClient){
      this.http.get('assets/output.csv', {responseType: 'text'})
      .subscribe(
          data => {
              let csvToRowArray = data.split("\n");
              var random= this.getRandomInt(csvToRowArray.length - 16);
              for (let index = 1+random, count=1; index <= random+15; index++,count++) {
                let row = csvToRowArray[index].split(";");
                this.questions.push(new QuestionClass(count+". "+row[0], [row[1], row[2], row[3]], parseInt(row[4])));
              }
              console.log(this.questions);
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

  questions: QuestionClass[]=[];

  allQuestions: QuestionClass[]=[];







}
