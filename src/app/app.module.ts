import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen'; //Splash

/* import new page */
import { CameraPage } from '../pages/camera/camera';
import {DetailHomePage} from '../pages/detail-home/detail-home';
import {DetailContactPage} from '../pages/detail-contact/detail-contact';

/*import provider api*/
import { HttpModule } from '@angular/http';

import {InsertDataProvider} from '../providers/insert-data/insert-data';


@NgModule({
  /* Add new page */
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CameraPage,
    TabsPage,

    DetailHomePage,
    DetailContactPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, //import 
  ],

  bootstrap: [IonicApp],

  /* Add new page */
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CameraPage,
    TabsPage,

    DetailHomePage,
    DetailContactPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    InsertDataProvider //provider api
  ]


})
export class AppModule {}
