import { Component, OnInit } from '@angular/core';

import { CheatsheetItem } from '../../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet-sidenav',
  templateUrl: './cheatsheet-sidenav.component.html',
  styleUrls: ['./cheatsheet-sidenav.component.css']
})
export class CheatsheetSidenavComponent implements OnInit {

  cheatsheetItems: CheatsheetItem[];

  constructor() { }

  ngOnInit() {
  }

}
