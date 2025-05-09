'use client'
import { Template, RenderIf, InputText, Button, FieldError, useNotification} from '@/components'
import { useState } from 'react'
import { LoginForm, signupValidationScheme, loginValidationScheme, formScheme} from './formScheme'
import { useFormik } from 'formik'
import { useAuth} from '@/resources'
import { Credentials, AccessToken, User } from '@/resources/user/user.resource'
import { useRouter} from 'next/navigation'

export default function Login(){
    
    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    const auth = useAuth();
    const notification = useNotification();
    const router = useRouter();

  

    async function onSubmit(values: LoginForm) {
        if(!newUserState){
            const credentials: Credentials = { email: values.email, password: values.password };
            try {   
                    const accessToken: AccessToken = await auth.authenticate(credentials);
                    auth.initSession(accessToken);
                    console.log("Session is Valid? ", auth.isSessionValid());
                    router.push('/gallery');
                
            } catch (error: any) {
                notification.notify(error?.message, 'error');
            }
        }
        else{
            const user: User = {email: values.email, password: values.password, name: values.name};
            
            try {
                await auth.save(user);
                notification.notify('User Created Successfully!', 'success');
                resetForm();
                setNewUserState(false);
            }
            catch(error: any){
                notification.notify(error?.message, 'error');
            }
            }
        }  
        
        const { values, handleChange, handleSubmit, errors, resetForm } = useFormik<LoginForm>({
            initialValues: formScheme,
            validationSchema: newUserState ? signupValidationScheme : loginValidationScheme,
            onSubmit: onSubmit
          });

    return(
        <Template loading={loading}>
            <div className='flex min-h-full flex-1 flex-col justify-center px6 py-12 lg:px-8'>
                
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1xl font-bol leading-9 tracking-tight text-gray-900'>
                       {newUserState ? 'Create New User' : 'Login to Your Account'}
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form onSubmit={handleSubmit} className='space-y-2'>    
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Name: </label>
                            </div>

                            <div className='mt-2'>
                               <InputText style='w-full' 
                                          id='name'
                                          value={values.name}
                                          onChange={handleChange}
                                          />
                                <FieldError error={errors.name}/>
                            </div>
                        </RenderIf>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Email: </label>
                            </div>

                            <div className='mt-2'>
                               <InputText style='w-full' 
                                          id='email'
                                          value={values.email}
                                          onChange={handleChange}/>
                                <FieldError error={errors.email}/>
                            </div>

                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Password: </label>
                            </div>

                            <div className='mt-2'>
                               <InputText style='w-full'
                                          type="password" 
                                          id='password'
                                          value={values.password}
                                          onChange={handleChange}/>
                                <FieldError error={errors.password}/>
                            </div>
                            <RenderIf condition={newUserState}>
                                <div>
                                    <label className='block text-sm font-medium leading-6 text-gray-900'>Repeat Password: </label>
                                </div>

                                <div className='mt-2'>
                                <InputText style='w-full'
                                            type="password" 
                                            id='passwordMatch'
                                            value={values.passwordMatch}
                                            onChange={handleChange}/>
                                    <FieldError error={errors.passwordMatch}/>
                                </div>
                            </RenderIf>

                        <div>
                            <RenderIf condition={newUserState}>
                                <Button type='submit' color='bg-indigo-700 hover:bg-indigo-500' 
                                label='Save'/>
                                <Button type='button' color='bg-red-700 hover:bg-red-500 mx-2' 
                                label='Cancel' onClick={event => setNewUserState(false)}/>
                            </RenderIf>

                            <RenderIf condition={!newUserState}>
                                <Button type='submit' color='bg-indigo-700 hover:bg-indigo-500' label='Login'/>
                                <Button type='button' color='bg-red-700 hover:bg-red-500 mx-2' 
                                label='Sign Up' onClick={event => setNewUserState(true)}/>
                            </RenderIf>
                        </div>
                    </form>
                </div>

            </div>
        </Template>
    )
}