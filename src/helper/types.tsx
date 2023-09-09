import { FieldValue } from "firebase/firestore";

export interface SignInFormModel{
    email: string;
    password: string;
}

export interface SignUpModel{
    name:string,
    email:string,
    password:string
}

export interface ForgotPasswordModel{
    email:string
}


export interface SignUpDbModel{
    name:string,
    email:string,
    password:string,
    timeStap:FieldValue
}

export interface ProfileModel{
    name:string,
    email:string,
}

export interface SellOrRentModel{
    sellOrRent:string,
    name:string,
    beds:number,
    baths:number,
    parkingSpot:boolean,
    furnished:boolean,
    address:string,
    description:string,
    offer:boolean,
    regularPrice:number,
    image:File|null

}