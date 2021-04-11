import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimmetComponent } from './zimmet.component';

describe('ZimmetComponent', () => {
  let component: ZimmetComponent;
  let fixture: ComponentFixture<ZimmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZimmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZimmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
