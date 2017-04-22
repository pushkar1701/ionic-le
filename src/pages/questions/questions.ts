import { Component } from '@angular/core';

import { TextQuestionPage } from '../questions/text/text';
import { VideoQuestionPage } from '../questions/video/video';
import { SoftwareQuestionPage } from '../questions/software/software';

@Component({
  templateUrl: 'questions.html'
})
export class QuestionsPage {

  tab1Root = TextQuestionPage;
  tab2Root = VideoQuestionPage;
  tab3Root = SoftwareQuestionPage;

  constructor() {

  }
}
