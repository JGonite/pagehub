type DeserializeType = 'BRAND' | 'LIST'

export interface PghubNavObject {
    tailwindArgs: string;
    content: PgHubNavObjectBrand | PgHubNavObjectList;
}

export interface PgHubNavObjectBrand {
    type: 'BRAND'
    name: string;
    iconSize?: string;
}

export interface PgHubNavObjectList {
    type: 'LIST'
    items: string[];
    itemsTailwindArgs?: { [key: string]: string };
    itemsIcons?: { [key: string]: string };
    subItems?: { [key: string]: string[] };
}