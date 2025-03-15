package io.gituhub.jfelixy.imagevaultapi.infra.repository;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String>{

}
