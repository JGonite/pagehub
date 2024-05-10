import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PghubNavbarComponent } from './pghub-navbar.component';

describe('PghubNavbarComponent', () => {
  let component: PghubNavbarComponent;
  let fixture: ComponentFixture<PghubNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PghubNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PghubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
