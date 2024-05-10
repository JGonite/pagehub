import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'pghub-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pghub-btn.component.html',
  styleUrl: './pghub-btn.component.scss'
})
export class PghubBtnComponenet {
  @Input("btn-text") btnText: string = "";
  @Input("btn-radius") btnRadius: string = "";
  @Input("btn-font-size") fontSize: string = "";
  @Input() disabled: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Input() loading: boolean = false;
  @Output("click") onSubmit = new EventEmitter();

  setClasses() {
    let klasses:any = {};
    let btnVar = 'btn ' + this.variant;
    klasses[btnVar] = true;
    return klasses;
  }

  submit() {
    this.onSubmit.emit();
  }

}
