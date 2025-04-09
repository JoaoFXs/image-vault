import * as Yup from 'yup'

export interface LoginForm{
    name?: string;
    email: string;
    password: string;
    passwordMatch?: string;
}

export const formScheme: LoginForm = { email: '', password: '', name: '', passwordMatch: ''}

export const validationScheme = Yup.object().shape({
    email: Yup.string().trim().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long!'),
    passwordMatch: Yup.string().oneOf([Yup.ref('password'), 'Password must match!']).required('Password must match!'),
})


