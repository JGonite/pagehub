import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PgHubNavObjectBrand, PgHubNavItems, PghubNavObject } from '../interfaces/pghub-navbar.interface';

type NavBarHideType = 'STATIC' | 'FIXED' | 'DYNAMIC';

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

  //Structural Variables:
  @Input() hide: NavBarHideType = 'STATIC';
  @Input() spaceAbove: string = "h-0";
  @Input() spaceBelow: string = "h-48";
  @Input() navMainTailwindArgs: string = "";
  @Input() navGridTailwindArgs: string = "";

  //Content Variables:
  @Input() navObjects: PghubNavObject[] = [];


  klasses : any = {};

  ngOnInit() : void {
  }

  isBrand(content : PgHubNavObjectBrand | PgHubNavItems) : content is PgHubNavObjectBrand {
    return content.type === 'BRAND';
  }

  isList(content : PgHubNavObjectBrand | PgHubNavItems) : content is PgHubNavItems {
    return content.type === 'ITEMS';
  }
  
}
