package io.gituhub.jfelixy.imagevaultapi.domain.service;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;

import java.util.List;
import java.util.Optional;

public interface ImagesService {

    Image save(Image image);

    Optional<Image> findById(String id);

    List<Image> search(ImageExtension extension, String query);

}
