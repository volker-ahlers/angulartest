import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetestComponent } from './servicetest.component';

describe('ServicetestComponent', () => {
  let component: ServicetestComponent;
  let fixture: ComponentFixture<ServicetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicetestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
