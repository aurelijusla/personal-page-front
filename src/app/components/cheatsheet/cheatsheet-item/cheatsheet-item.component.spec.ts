import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetItemComponent } from './cheatsheet-item.component';

describe('CheatsheetItemComponent', () => {
  let component: CheatsheetItemComponent;
  let fixture: ComponentFixture<CheatsheetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
