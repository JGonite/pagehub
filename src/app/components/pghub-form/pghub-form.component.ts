import { Component, signal } from '@angular/core';
import { PghubBtnComponenet } from '../pghub-btn/pghub-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PghubFormService } from './pghub-form.service';

@Component({
  selector: 'pghub-form',
  standalone: true,
  imports: [
    PghubBtnComponenet, 
    ReactiveFormsModule
  ],
  providers: [
    PghubFormService
  ],
  templateUrl: './pghub-form.component.html',
  styleUrl: './pghub-form.component.scss'
})
export class PghubFormComponent {

  pghubForm!: FormGroup;
  loading = signal(false);

  constructor(private service: PghubFormService) {
    this.pghubForm = new FormGroup( 
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
      }
    )
  }

  submit() {
    this.loading.set(true);
    if(this.pghubForm.valid) {
      this.service.submeterForm(this.pghubForm.value.name, this.pghubForm.value.email).subscribe({
          next: () => {
            this.pghubForm.reset();
            this.loading.set(false);
          }
        }
      );
    }
  }

}
