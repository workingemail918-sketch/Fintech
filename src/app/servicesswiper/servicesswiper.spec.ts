import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesswiper } from './servicesswiper';

describe('Servicesswiper', () => {
  let component: Servicesswiper;
  let fixture: ComponentFixture<Servicesswiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesswiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicesswiper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
