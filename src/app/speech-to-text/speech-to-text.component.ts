import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {


  constructor( public service : VoiceRecognitionService) {this.service.init() }

  ngOnInit():void {
  }

  startService(){
    debugger;
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

  checkIDs(){
    this.service.arrayCheck()
  }

}
