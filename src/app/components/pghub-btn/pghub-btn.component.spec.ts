import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PghubBtnComponenet } from './pghub-btn.component';

describe('BtnPrimaryComponent', () => {
  let component: PghubBtnComponenet;
  let fixture: ComponentFixture<PghubBtnComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PghubBtnComponenet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PghubBtnComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
