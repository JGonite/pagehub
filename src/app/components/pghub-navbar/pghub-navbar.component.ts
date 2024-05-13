import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

type NavBarHideType = 'static' | 'fixed' | 'dynamic';

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
  @Input() items: string[] = [];

  //optional parameters:
  @Input() brandName: string = "";
  @Input() navItemsTailwindArgs: string = "";
  @Input() brandIconSize: string = "";

  brandImagePath: string = "./assets/iconeMarca.png";


  klasses : any = {};

  ngOnInit() : void {
  }

  setClasses() : any {
    this.klasses["flex"] = true;
    this.klasses[this.tailwindArgs] = true;
    return this.klasses;
  }

  isBrand(item : string) : boolean {
    return item === 'brand';
  }

  containsSubmenu(item : string) : boolean {
    return item.indexOf('[sub]') === 0;
  }

  getItemName(item : string) : string {
    return item.replace('[sub]','');
  }
  
}
