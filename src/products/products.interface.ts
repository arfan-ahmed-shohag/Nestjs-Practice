export interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
    specifications: {
        processor?: string;
        ram?: string;
        storage?: string;
        display?: string;
        battery?: string;
        weight?: string;
        camera?: string;
        type?: string;
        connectivity?: string;
    }
}
