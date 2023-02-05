import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulingComponent } from './moduling.component';

describe('ModulingComponent', () => {
  let component: ModulingComponent;
  let fixture: ComponentFixture<ModulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
