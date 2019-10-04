import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaveStageComponent } from './rave-stage.component';

describe('RaveStageComponent', () => {
  let component: RaveStageComponent;
  let fixture: ComponentFixture<RaveStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaveStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaveStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
