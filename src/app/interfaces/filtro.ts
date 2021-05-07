export interface Filtro {

    precio?: Precio | null | undefined;
    color?: string | null | undefined;
    tipo?: string | null | undefined;
    texto?: string | null | undefined;

}

interface Precio {
    precioMaximo: number;
    precioMinimo: number
}