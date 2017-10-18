import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

import { HomePage } from '../pages';
import { CategoryEntry, Category } from './../../model';
import { DataService } from './../../app/data.service';

interface ExtendedCategoryEntry extends CategoryEntry {
  data?: Category
}

@IonicPage({
  segment: 'entry/:entryId',
  defaultHistory: [ HomePage ]
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  entry: ExtendedCategoryEntry;

  constructor(private dataService: DataService, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.dataService.getEntry(this.navParams.get('entryId'))
      .subscribe(entry => {
        this.dataService.getCategory(entry.category)
          .subscribe(category => {
            this.entry = { ...entry, data: category };
            this.entry.data.comment = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
          });
      });
  }

}
