package io.gituhub.jfelixy.imagevaultapi.infra.repository;

import io.gituhub.jfelixy.imagevaultapi.application.images.ImageDTO;
import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;
import io.gituhub.jfelixy.imagevaultapi.infra.repository.specs.ImageSpecs;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static io.gituhub.jfelixy.imagevaultapi.infra.repository.specs.ImageSpecs.*;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    /**
     * @param extension
     * @param query
     * @return
     *
     * SELECT * FROM IMAGE WHERE 1 = 1 AND EXTENSION = 'PN' AND (NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
     * */

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){
        // Using to Query in table Image
        //1 = 1
        Specification<Image> conjunction = (root, q, criteriaBuilder) -> criteriaBuilder.conjunction() ;
        // SELECT * FROM IMAGE WHERE 1 = 1/ To all find strategy
        Specification<Image> spec = Specification.where(conjunction);

        if(extension != null){
            //AND EXTENSION = 'PN'
            spec = spec.and(extensionEqual(extension));
        }

        if(StringUtils.hasText(query)){
            // AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
            // RIVER => %RI% -> Percentage to search for what comes before and after the string
            //SpecificationanyOf: Or
            spec = spec.and(Specification.anyOf(nameLike(query), tagsLike(query)));
        }


        return findAll(spec);
    }

}
