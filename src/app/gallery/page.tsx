import {Template, ImageCard} from '@/components'



export default function GalleryPage(){
    return(
        <Template>
            <section className="grid grid-cols-4 gap-8"> 
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
                <ImageCard name='ney-love' dataUpload='25/03/2025' size='10000kb' src='https://i.pinimg.com/736x/8e/b5/f1/8eb5f1f5e58bdc15cb55b55012c22465.jpg'/>
            </section>
        </Template>
    )
}