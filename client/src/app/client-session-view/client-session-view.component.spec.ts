import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSessionViewComponent } from './client-session-view.component';

describe('ClientSessionViewComponent', () => {
  let component: ClientSessionViewComponent;
  let fixture: ComponentFixture<ClientSessionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSessionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
