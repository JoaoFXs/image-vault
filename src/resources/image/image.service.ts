import { Image } from './image.resource'
import { useAuth } from '@/resources'


class ImageService{
    baseURL: string = 'http://localhost:8080/v1/images';
    auth = useAuth();

    async search(query: string = "", extension: string = "") : Promise<Image[]> {
        const userSession = this.auth.getUserSession();
        
        const url = `${this.baseURL}?query=${query}&extension=${extension}` 
        const response = await fetch(url);
        return await response.json();
    }

    async save(dados: FormData) : Promise<string> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: dados
        });
        return response.headers.get('location') ?? ''
    }
}

export const useImageService = () => new ImageService();

