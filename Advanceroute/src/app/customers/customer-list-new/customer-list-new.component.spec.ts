import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListNewComponent } from './customer-list-new.component';

describe('CustomerListNewComponent', () => {
  let component: CustomerListNewComponent;
  let fixture: ComponentFixture<CustomerListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
