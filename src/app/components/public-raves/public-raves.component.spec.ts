import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRavesComponent } from './public-raves.component';

describe('PublicRavesComponent', () => {
  let component: PublicRavesComponent;
  let fixture: ComponentFixture<PublicRavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicRavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
