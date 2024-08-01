import { PgHubTextElement } from "./pghub-text-element.interface";

type DeserializeType = 'BRAND' | 'ITEMS'

export interface PghubNavObject {
    tailwindArgs: string;
    content: PgHubNavObjectBrand | PgHubNavItems;
}

export interface PgHubNavObjectBrand {
    type: 'BRAND'
    name: string;
    image?: string;
    imageSize?: string;
    tailwindArgs?: string;
}

export interface PgHubNavItems {
    type: 'ITEMS';
    items: PgHubNavItem[];
    tailwindArgs?: string;
}

export interface PgHubNavItem {
    description: string;
    tailwindArgs?: string;
    textElement?: PgHubTextElement;
    subItems?: PgHubNavItem[];
}