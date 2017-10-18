import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { MainPage } from './main';

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    IonicPageModule.forChild(MainPage)
  ],
  entryComponents: [
    MainPage
  ]
})
export class MainPageModule {}
