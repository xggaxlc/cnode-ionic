import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Api } from '../providers';
import { NetworkDetect, Loading, TopicListItem } from '../components';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { TopicListPage } from '../pages/topic-list/topic-list';
import { TopicDetailPage } from '../pages/topic-detail/topic-detail';

@NgModule({
  declarations: [
    NetworkDetect,
    Loading,
    TopicListItem,
    MyApp,
    TabsPage,
    TopicListPage,
    TopicDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      tabsHideOnSubPages: true
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NetworkDetect,
    Loading,
    TopicListItem,
    MyApp,
    TabsPage,
    TopicListPage,
    TopicDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
