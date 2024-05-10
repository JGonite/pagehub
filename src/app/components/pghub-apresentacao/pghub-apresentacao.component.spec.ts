import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PghubApresentacaoComponent } from './pghub-apresentacao.component';

describe('PghubApresentacaoComponent', () => {
  let component: PghubApresentacaoComponent;
  let fixture: ComponentFixture<PghubApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PghubApresentacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PghubApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
