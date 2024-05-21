import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PgHubNavObjectList, PghubNavObject } from '../interfaces/pghub-navbar.interface';

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

  brandImagePath: string = "./assets/iconeMarca.png";

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

  isBrand(navObject : PghubNavObject) : boolean {
    return navObject.deserializeType == 'BRAND';
  }

  isList(navObject : PghubNavObject) : boolean {
    return navObject.deserializeType == 'LIST';
  }

  containsSubmenu(navObjectListContent : PgHubNavObjectList, item : string) : boolean {
    if (navObjectListContent.subItems !== undefined && navObjectListContent.subItems[item] !== undefined) {
      return (navObjectListContent.subItems[item].length > 0)
    } else {
      return false;
    }
  }
  
}
