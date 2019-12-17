export interface Filter {
    searchQuery: string;
    imageType: string;
    order: string;
}

export interface FilterSelect {
    title: string;
    value: string;
}

export interface Avocado {
    id: number;
    webformatURL: string;
}
