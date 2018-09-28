import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStoreFinalComponent } from './search-store-final.component';

describe('SearchStoreFinalComponent', () => {
  let component: SearchStoreFinalComponent;
  let fixture: ComponentFixture<SearchStoreFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStoreFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStoreFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
