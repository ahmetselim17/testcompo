import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deneme1Component } from './deneme1.component';

describe('Deneme1Component', () => {
  let component: Deneme1Component;
  let fixture: ComponentFixture<Deneme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deneme1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deneme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
