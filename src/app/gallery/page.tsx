'use client'

import {Template, ImageCard} from '@/components'
import { useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';

export default function GalleryPage(){

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [extension, setExtension] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function searchImages(){
        setLoading(true)
        const resultImages = await useService.search(query, extension);
        setImages(resultImages);
        setLoading(false)
    }
    
    function renderImageCard(image: Image){
        return (
            <ImageCard key={image.url} name={image.name} src={image.url} size={image.size} dataUpload={image.uploadDate} extension={image.extension}/>
        );
    }

    function renderImageCards(){
        return images.map(renderImageCard)
    }
    return(
        <Template loading={loading}>

            <section className='flex flex-col items-center justify-center my-5'>
                
                <div className="flex space-x-4">
                    <input type='text'
                    onChange={event => setQuery(event.target.value)}
                    className='border px-5 py-2 rounded-lg text-gray-700'/>
                    <select onChange={event=> setExtension(event.target.value)} className="border px-4 py-2 rounded-lg text-gray-900">
                        <option value="">All formats</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400" onClick={searchImages}>Search</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-300">Add New</button>
                </div>

            </section>

            <section className="grid grid-cols-4 gap-8">   
            {renderImageCards()}
            </section>
        </Template>
    )
}