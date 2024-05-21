type DeserializeType = 'BRAND' | 'LIST'

export interface PghubNavObject {
    deserializeType : DeserializeType;
    tailwindArgs: string;
    content: PgHubNavObjectBrand | PgHubNavObjectList;
}

export interface PgHubNavObjectBrand {
    name? : string;
    iconSize?: string;
    items?: string[];
    subItems?: { [key: string]: string[] };
}

export interface PgHubNavObjectList {
    name?: string;
    iconSize?: string;
    items?: string[];
    subItems?: { [key: string]: string[] };
}