import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { App } from './app';
import { DataService } from './data.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App, {
      pageTransition: 'ios-transition',
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App
  ],
  providers: [
    DataService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
