import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaFormComponent } from './coronaform.component';

describe('CoronaFormComponent', () => {
  let component: CoronaFormComponent;
  let fixture: ComponentFixture<CoronaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
