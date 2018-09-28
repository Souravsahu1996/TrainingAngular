import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFavListComponent } from './show-fav-list.component';

describe('ShowFavListComponent', () => {
  let component: ShowFavListComponent;
  let fixture: ComponentFixture<ShowFavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
