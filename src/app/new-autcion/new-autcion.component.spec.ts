import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutcionComponent } from './new-autcion.component';

describe('NewAutcionComponent', () => {
  let component: NewAutcionComponent;
  let fixture: ComponentFixture<NewAutcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAutcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAutcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
