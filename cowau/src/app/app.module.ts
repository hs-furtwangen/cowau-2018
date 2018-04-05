import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//components
import { MyApp } from './app.component';
import { FlipitPage } from '../pages/flipit/flipit';
import { IdlePage } from '../pages/idle/idle';
import { EmojiPage } from '../pages/emoji/emoji';
import { ServerPage } from '../pages/server/server';

//services
import { GesturesService } from '../services/gestures.service';

@NgModule({
  declarations: [
    MyApp,
    EmojiPage,
    FlipitPage,
    IdlePage,
    ServerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmojiPage,
    FlipitPage,
    IdlePage,
    ServerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GesturesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
