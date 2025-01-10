import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyplannerComponent } from './whyplanner.component';

describe('WhyplannerComponent', () => {
  let component: WhyplannerComponent;
  let fixture: ComponentFixture<WhyplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyplannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
