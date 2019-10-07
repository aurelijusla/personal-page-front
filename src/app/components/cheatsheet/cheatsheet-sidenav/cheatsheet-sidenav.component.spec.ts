import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetSidenavComponent } from './cheatsheet-sidenav.component';

describe('CheatsheetSidenavComponent', () => {
  let component: CheatsheetSidenavComponent;
  let fixture: ComponentFixture<CheatsheetSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
