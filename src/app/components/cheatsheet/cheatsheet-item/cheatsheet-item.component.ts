import { Component, OnInit, Input } from '@angular/core';

import { CheatsheetItem } from '../../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet-item',
  templateUrl: './cheatsheet-item.component.html',
  styleUrls: ['./cheatsheet-item.component.css']
})
export class CheatsheetItemComponent implements OnInit {
  @Input() cheatsheetItem: CheatsheetItem;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      cheatsheetItem: true,
      isSelected: this.cheatsheetItem.isSelected,
    }

    return classes;
  }

  

}
