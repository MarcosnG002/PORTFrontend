import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortDebComponent } from './fort-deb.component';

describe('FortDebComponent', () => {
  let component: FortDebComponent;
  let fixture: ComponentFixture<FortDebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortDebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortDebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
