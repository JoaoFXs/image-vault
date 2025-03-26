'use client'

import {Template, ImageCard} from '@/components'
import { useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';

export default function GalleryPage(){

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImages(){
        const resultImages = await useService.search();
        setImages(resultImages);
        console.table(images);
    }
    
    return(
        <Template>
            <button className='bg-gray-500' onClick={searchImages}>Click to change</button>
            <section className="grid grid-cols-4 gap-8">   
                <ImageCard name="{imageName}" dataUpload='25/03/2025' size='10000kb' src=""/>
            
            </section>
        </Template>
    )
}