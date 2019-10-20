import { Component, OnInit, Input } from '@angular/core';

import { CheatsheetService } from '../../services/cheatsheet.service';
import { CheatsheetItem } from '../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet-container',
  templateUrl: './cheatsheet-container.component.html',
  styleUrls: ['./cheatsheet-container.component.css']
})
export class CheatsheetContainerComponent implements OnInit {
  cheatsheetItems: CheatsheetItem[];

  public selectedCheatsheetItem: CheatsheetItem;

  childItemSeleceted(cheatsheetItem: CheatsheetItem) {
    this.selectedCheatsheetItem = cheatsheetItem;
  }

  constructor(public cheatsheetService: CheatsheetService) { }

  ngOnInit() {
    this.cheatsheetService.getCheatsheetItems().subscribe(cheatsheets => {
      this.cheatsheetItems = cheatsheets;
    });
  }

  

}
