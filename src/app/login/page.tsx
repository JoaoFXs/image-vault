'use client'
import { Template, RenderIf } from '@/components'
import { useState } from 'react'
export default function login(){
    
    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    
    return(
        <Template loading={loading}>
            <div className='flex min-h-full flex-1 flex-col justify-center px6 py-12 lg:px-8'>
                
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1xl font-bol leading-9 tracking-tight text-gray-900'>
                        Login to your account
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6'>
                        <RenderIf condition={newUserState}>
                            <div>
                                <label>Name: </label>
                            </div>
                        </RenderIf>  
                    </form>
                </div>

            </div>
        </Template>
    )
}