package io.gituhub.jfelixy.imagevaultapi.domain.service;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;

import java.util.Optional;

public interface ImagesService {

    Image save(Image image);

    Optional<Image> findById(String id);

}
