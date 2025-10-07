export interface IProduct {
    titile: string,
    imag_url: string | ProductImage [],
    price:number,
    discount?: number,
    Product_Type: string,
    Brand: string
}


interface ProductImage {
    color: string,
    url: string
}