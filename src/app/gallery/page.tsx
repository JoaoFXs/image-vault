'use client'

import {Template, ImageCard} from '@/components'
import { useState } from 'react'


export default function GalleryPage(){

    const image1 = "https://media.tenor.com/TiMKsmmhZMIAAAAM/messi-meme.gif";
    const image2 = "https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg";
    const name1 = 'messi-love'
    const name2 = 'ney-love'
    
    const [imageCode, setImageCode] = useState<number>(1);
    const [imageUrl, setImageUrl] = useState<string>(image2);
    const [imageName, setImageName] = useState<string>();
    function changeImage(){
        if(imageCode == 1){
            setImageCode(2);
            setImageUrl(image2);
            setImageName(name2);
        }else{
            setImageCode(1);
            setImageUrl(image1);
            setImageName(name1);
        }
    }

    return(
        <Template>
             <button className='bg-gray-500' onClick={changeImage}>Click to change</button>
            <section className="grid grid-cols-4 gap-8">   
                <ImageCard name={imageName} dataUpload='25/03/2025' size='10000kb' src={imageUrl}/>
                <ImageCard name={imageName} dataUpload='25/03/2025' size='10000kb' src={imageUrl}/>
                <ImageCard name={imageName} dataUpload='25/03/2025' size='10000kb' src={imageUrl}/>
            </section>
        </Template>
    )
}