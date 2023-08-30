import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsandmapsComponent } from './chartsandmaps.component';

describe('ChartsandmapsComponent', () => {
  let component: ChartsandmapsComponent;
  let fixture: ComponentFixture<ChartsandmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsandmapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsandmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
