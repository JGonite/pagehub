import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

type NavBarHideType = 'static' | 'fixed' | 'dynamic';
type ItemsType = 'brand';

@Component({
  selector: 'pghub-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './pghub-navbar.component.html',
  styleUrl: './pghub-navbar.component.scss'
})
export class PghubNavbarComponent {

  @Input() hide: NavBarHideType = 'static';
  @Input() tailwindArgs: string = "";
  @Input() spaceAbove: string = "h-0";
  @Input() spaceBelow: string = "h-48";
  @Input() items: ItemsType[] = [];

  //optional parameters:
  @Input() brandName: string = "";
  @Input() brandMargin: string = "";
  @Input() brandIconSize: string = "";

  brandImagePath: string = "./assets/iconeMarca.png";


  klasses : any = {};

  ngOnInit() : void {
  }

  setClasses() : any {
    this.klasses["flex"] = true;
    this.klasses["flex-row"] = true;
    this.klasses[this.tailwindArgs] = true;
    return this.klasses;
  }

  containsBrand() {
    return this.items.includes('brand');
  }
  
}
