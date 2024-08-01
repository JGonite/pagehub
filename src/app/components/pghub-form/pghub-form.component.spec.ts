import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PghubFormComponent } from './pghub-form.component';

describe('PghubFormComponent', () => {
  let component: PghubFormComponent;
  let fixture: ComponentFixture<PghubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PghubFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PghubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
