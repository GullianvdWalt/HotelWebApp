import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpierencesComponent } from './expierences.component';

describe('ExpierencesComponent', () => {
  let component: ExpierencesComponent;
  let fixture: ComponentFixture<ExpierencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpierencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpierencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
