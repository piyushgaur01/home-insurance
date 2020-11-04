import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerComponent } from './homeowner.component';

describe('HomeownerComponent', () => {
  let component: HomeownerComponent;
  let fixture: ComponentFixture<HomeownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
