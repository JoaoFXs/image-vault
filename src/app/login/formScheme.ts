import * as Yup from 'yup'

interface Loginform{
    name?: string;
    email: string;
    passowrd: string;
    passwordMatch?: string;
}