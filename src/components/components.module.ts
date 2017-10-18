import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListItemComponent } from './list-item/list-item';
import { DateInWordsPipe } from './date-in-words-pipe/date-in-words-pipe';

@NgModule({
	declarations: [
		ListItemComponent, 
		DateInWordsPipe
	],
	imports: [IonicModule.forRoot(ComponentsModule)],
	exports: [
		ListItemComponent, 
		DateInWordsPipe
	]
})
export class ComponentsModule {}
