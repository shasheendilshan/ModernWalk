
type Rating ={
    rate:number,
    count:number
}

export interface IProduct{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating
}

export interface IProductsResponse{
    data:IProduct[],
    error:string| null
}