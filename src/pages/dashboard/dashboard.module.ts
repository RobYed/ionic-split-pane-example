import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DashboardPage } from './dashboard';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DashboardPage)
  ],
  entryComponents: [
    DashboardPage
  ]
})
export class DashboardPageModule {}
