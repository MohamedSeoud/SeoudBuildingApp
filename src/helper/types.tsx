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