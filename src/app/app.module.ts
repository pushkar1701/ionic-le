import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DashBoard } from '../pages/dashboard/dashboard';
import { QuestionsPage } from '../pages/questions/questions';
import { TextQuestionPage } from '../pages/questions/text/text';
import { VideoQuestionPage } from '../pages/questions/video/video';
import { SoftwareQuestionPage } from '../pages/questions/software/software';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashBoard,
    QuestionsPage,
    TextQuestionPage,
    VideoQuestionPage,
    SoftwareQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashBoard,
    QuestionsPage,
    TextQuestionPage,
    VideoQuestionPage,
    SoftwareQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
