import { Component, OnInit } from '@angular/core';

import { CheatsheetService } from '../../services/cheatsheet.service';
import { CheatsheetItem } from '../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.css']
})
export class CheatsheetComponent implements OnInit {

  cheatsheetItems: CheatsheetItem[];

  constructor(private cheatsheetService: CheatsheetService) { }

  ngOnInit() {
    this.cheatsheetService.getCheatsheetItems().subscribe(cheatsheets => {
      this.cheatsheetItems = cheatsheets;
    });
  }

}
