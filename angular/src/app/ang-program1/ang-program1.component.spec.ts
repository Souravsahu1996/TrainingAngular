import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngProgram1Component } from './ang-program1.component';

describe('AngProgram1Component', () => {
  let component: AngProgram1Component;
  let fixture: ComponentFixture<AngProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngProgram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
