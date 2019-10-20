import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetContainerComponent } from './cheatsheet-container.component';

describe('CheatsheetContainerComponent', () => {
  let component: CheatsheetContainerComponent;
  let fixture: ComponentFixture<CheatsheetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
