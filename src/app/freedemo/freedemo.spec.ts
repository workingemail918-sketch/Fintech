import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freedemo } from './freedemo';

describe('Freedemo', () => {
  let component: Freedemo;
  let fixture: ComponentFixture<Freedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Freedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
