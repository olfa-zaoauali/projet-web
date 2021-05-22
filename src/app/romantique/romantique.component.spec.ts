import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomantiqueComponent } from './romantique.component';

describe('RomantiqueComponent', () => {
  let component: RomantiqueComponent;
  let fixture: ComponentFixture<RomantiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomantiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomantiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
