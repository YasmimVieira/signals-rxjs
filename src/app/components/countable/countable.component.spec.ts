import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountableComponent } from './countable.component';

describe('CountableComponent', () => {
  let component: CountableComponent;
  let fixture: ComponentFixture<CountableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
