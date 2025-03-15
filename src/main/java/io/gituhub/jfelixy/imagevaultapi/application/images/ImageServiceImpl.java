package io.gituhub.jfelixy.imagevaultapi.application.images;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.service.ImagesService;
import io.gituhub.jfelixy.imagevaultapi.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImagesService {

    private final ImageRepository imageRepository;

    @Override
    @Transactional
    public Image save(Image image) {
        return imageRepository.save(image);
    }
}
