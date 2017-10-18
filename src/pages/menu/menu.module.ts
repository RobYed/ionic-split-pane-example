import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { MenuPage } from './menu';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MenuPage)
  ],
  entryComponents: [
    MenuPage
  ]
})
export class MenuPageModule {}
