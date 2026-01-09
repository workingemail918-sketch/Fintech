import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meetteam } from './meetteam';

describe('Meetteam', () => {
  let component: Meetteam;
  let fixture: ComponentFixture<Meetteam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meetteam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meetteam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
