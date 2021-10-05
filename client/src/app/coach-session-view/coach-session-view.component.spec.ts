import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSessionViewComponent } from './coach-session-view.component';

describe('CoachSessionViewComponent', () => {
  let component: CoachSessionViewComponent;
  let fixture: ComponentFixture<CoachSessionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachSessionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
