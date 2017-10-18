import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { MainPage, DashboardPage } from '../pages';
import { DataService } from '../../app/data.service';
import { Category } from '../../model';

@IonicPage({ segment: 'menu' })
@Component({
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild('content') mainNav: NavController;

  root: string = MainPage;

  categories: Observable<Category[]>;

  constructor(private dataService: DataService) {
    this.categories = this.dataService.getCategories();
  }

  onSelect(entryId: string) {
    this.mainNav.push(DashboardPage, { entryId });
  }
}
