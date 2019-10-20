import { Component, OnInit, Input } from '@angular/core';

import { CheatsheetItem } from '../../../models/cheatsheet-item.model';

@Component({
  selector: 'app-cheatsheet-detail',
  templateUrl: './cheatsheet-detail.component.html',
  styleUrls: ['./cheatsheet-detail.component.css']
})
export class CheatsheetDetailComponent implements OnInit {
  @Input() cheatsheetItem: CheatsheetItem;

  constructor() { }

  ngOnInit() {
  }

}
