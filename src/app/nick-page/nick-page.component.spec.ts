import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickPageComponent } from './nick-page.component';

describe('NickPageComponent', () => {
  let component: NickPageComponent;
  let fixture: ComponentFixture<NickPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
