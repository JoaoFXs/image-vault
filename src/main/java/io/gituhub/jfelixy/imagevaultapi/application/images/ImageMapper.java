package io.gituhub.jfelixy.imagevaultapi.application.images;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class ImageMapper {

    public Image mapToImage(MultipartFile file, String name, List<String> tags){
        try {
            Image image = Image
                    .builder()
                    .tags(String.join(",", tags))
                    .size(file.getSize())
                    .extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType())))
                    .file(file.getBytes())
                    .name(name)
                    .build();
            return image;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public ImageDTO imageToDTO(Image image, String url){
        return ImageDTO.builder()
                .url(url)
                .extension(image.getExtension().name())
                .name(image.getName())
                .size(image.getSize())
                .uploadDate(image.getUploadDate().toLocalDate())
                .build();
    }
}
