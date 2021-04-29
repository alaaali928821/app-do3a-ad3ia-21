import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryNightComponent } from './starry-night.component';

describe('StarryNightComponent', () => {
  let component: StarryNightComponent;
  let fixture: ComponentFixture<StarryNightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarryNightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarryNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
