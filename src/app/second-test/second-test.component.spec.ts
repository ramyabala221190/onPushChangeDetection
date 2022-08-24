import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTestComponent } from './second-test.component';

describe('SecondTestComponent', () => {
  let component: SecondTestComponent;
  let fixture: ComponentFixture<SecondTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
