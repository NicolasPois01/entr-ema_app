import { BasketItem } from "./basket-item.modal";

export interface User{
    id: number,
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    role: number,
    credit: number,
    basket: BasketItem[]
}
