import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaredetailsComponent } from './caredetails.component';

describe('CaredetailsComponent', () => {
  let component: CaredetailsComponent;
  let fixture: ComponentFixture<CaredetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaredetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
