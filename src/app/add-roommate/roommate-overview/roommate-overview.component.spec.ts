import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateOverviewComponent } from './roommate-overview.component';

describe('RoommateOverviewComponent', () => {
  let component: RoommateOverviewComponent;
  let fixture: ComponentFixture<RoommateOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommateOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
