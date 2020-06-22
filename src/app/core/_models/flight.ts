import { Passenger } from './passenger';

export class Flight{
    id: number;
    planename: string
    planeno: string;
    departure: string;
    departureFrom: string;
    arrivalTo: string;
    arrival: string;
    duration: string;
    price: number;
    ancillaryServices:string [];
     
    specialMeals: string[];
     
    shoppingItems:string [];
     
    image:string
    passengers: Passenger[]
}