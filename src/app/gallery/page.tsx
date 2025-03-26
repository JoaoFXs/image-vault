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
       
        // console.table(images);
    }
    
    function renderImageCard(image: Image){
        return (
            <ImageCard name={image.name} src={image.url} size={image.size} dataUpload={image.uploadDate}/>
        );
    }

    function renderImageCards(){
        return images.map(renderImageCard)
    }
    return(
        <Template>
            <button className='bg-gray-500' onClick={searchImages}>Click to change</button>
            <section className="grid grid-cols-4 gap-8">   
            {renderImageCards()}
            </section>
        </Template>
    )
}