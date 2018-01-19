import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsearchComponent } from './isearch.component';

describe('IsearchComponent', () => {
  let component: IsearchComponent;
  let fixture: ComponentFixture<IsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
