import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from '../pages';

@IonicPage({ segment: 'monitor' })
@Component({
  templateUrl: 'main.html'
})
export class MainPage {

  root: string = HomePage;

  constructor() {}
}
