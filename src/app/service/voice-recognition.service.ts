import { Injectable } from '@angular/core';


declare var webkitSpeechRecognition: any;

 //@Injectable({
//   providedIn: 'root'
// })
export class VoiceRecognitionService {

 recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;
  outputText: string = ' ';
  output: string = "The Relevent Project IDs are: ";
  testArray: number[] = [100001, 100002, 100003, 101001, 101002, 101003, 201001, 201002, 201003];
  parsedArray: string[] = [];


  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.outputText = '';
    this.output = 'The Relevent Project IDs are: ';
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat1()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.outputText = '';
    this.output = 'The Relevent Project IDs are: ';
    this.isStoppedSpeechRecog = true;
    this.wordConcat1();
    this.recognition.stop()
    console.log(this.text);



  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  wordConcat1() {
    this.text = this.tempWords;
    this.tempWords = '';
  }

  arrayCheck(){
    this.outputText = '';
    this.output = 'The Relevent Project IDs are: ';
    for(let i = 1; i <= 9; i++)
      {
        this.parsedArray[i] = String(this.testArray[i]);
      }

      for(let k = 1; k <= 9; k++)
      {
      var M = (this.text).length;
      var N = (this.parsedArray[k]).length;

       /* A loop to slide pat[] one by one */
      for (let i = 0; i <= N - M; i++)
        {
         var j;
         /* For current index i, check for pattern match */
         for (j = 0; j < M; j++)
             if (this.parsedArray[k][i + j] != this.text[j])
                 break;

         if (j == M)
         {
         console.log(this.testArray[k]);
         this.outputText = this.outputText + this.testArray[k] + ' ';
         }
        }
       }

      this.output = this.output + this.outputText;


    }



}



