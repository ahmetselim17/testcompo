import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkipmanComponent } from './ekipman.component';

describe('EkipmanComponent', () => {
  let component: EkipmanComponent;
  let fixture: ComponentFixture<EkipmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkipmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkipmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
