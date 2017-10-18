import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../app/data.service';
import { Category, CategoryEntry } from '../../model';

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent implements OnChanges {

  @Input() category: Category;

  @Output() select: EventEmitter<string> = new EventEmitter();

  entries: Observable<CategoryEntry[]>

  constructor(private dataService: DataService) {}
  
  public ngOnChanges() {
    this.entries = this.dataService.getEntries(this.category.id);
  }
  
  public onSelect(entryId: string) {
    this.select.emit(entryId);
  }

}
