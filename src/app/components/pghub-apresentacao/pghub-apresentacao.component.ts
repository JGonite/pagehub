import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PghubBtnComponenet } from '../pghub-btn/pghub-btn.component';

type ApresentacaoVariants = "side-image" | "background-image";

@Component({
  selector: 'pghub-apresentacao',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PghubBtnComponenet
  ],
  templateUrl: './pghub-apresentacao.component.html',
  styleUrl: './pghub-apresentacao.component.scss'
})
export class PghubApresentacaoComponent {

  @Input() mainText: string = "";
  @Input() descriptionText: string = "";
  @Input() buttonText: string = "";
  @Input() buttonRadius: string = "";
  @Input() buttonFontSize: string = "";
  @Input() variant: ApresentacaoVariants = "side-image";
  imagemApresentacao: string = "./assets/imagemApresentacao.png";
  
  

}
