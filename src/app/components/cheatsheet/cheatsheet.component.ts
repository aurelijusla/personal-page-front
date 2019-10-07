import { Component, OnInit } from '@angular/core';

import { CheatsheetItem } from '../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.css']
})
export class CheatsheetComponent implements OnInit {

  cheatsheetItems: CheatsheetItem[];

  constructor() { }

  ngOnInit() {
    this.cheatsheetItems = [{
      id: 0,
      name: 'Angular',
      command: 'npm install angular',
      docs: 'Angular docs link',
      isSelected: false,
    },
    {
      id: 1,
      name: 'Node.JS',
      command: 'npm install node',
      docs: 'Node docs link',
      isSelected: false,
    },
  ]
  }

}
