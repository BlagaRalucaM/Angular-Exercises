import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentMapComponent } from './apartament-map.component';

describe('ApartamentMapComponent', () => {
  let component: ApartamentMapComponent;
  let fixture: ComponentFixture<ApartamentMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartamentMapComponent]
    });
    fixture = TestBed.createComponent(ApartamentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
