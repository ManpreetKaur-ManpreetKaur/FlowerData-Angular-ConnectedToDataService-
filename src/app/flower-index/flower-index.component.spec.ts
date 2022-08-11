import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerIndexComponent } from './flower-index.component';

describe('FlowerIndexComponent', () => {
  let component: FlowerIndexComponent;
  let fixture: ComponentFixture<FlowerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
