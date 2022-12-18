export class QuestionClass {

  Question: string;
  Answers: Array<string>;
  CorrectAnswer: number;

  constructor(question: string, answers: Array<string>, correctAnswer: number) {
    this.Question = question;
    this.Answers = answers;
    this.CorrectAnswer = correctAnswer;
  }


}
