package io.gituhub.jfelixy.imagevaultapi.infra.repository;

import io.gituhub.jfelixy.imagevaultapi.application.images.ImageDTO;
import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

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
            Specification<Image> extensionEqual =  (root, q, cb) -> cb.equal(root.get("extension"), extension);
            spec = spec.and(extensionEqual);
        }

        if(StringUtils.hasText(query)){
            // AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
            // RIVER => %RI% -> Percentage to search for what comes before and after the string
            Specification<Image> nameLike = (root, q, cb) -> cb.like(cb.upper(root.get("name")), "%" + query.toUpperCase() + "%");
            Specification<Image> tagsLike = (root, q, cb) -> cb.like(cb.upper(root.get("tags")), "%" + query.toUpperCase() + "%");
            //SpecificationanyOf: Or
            Specification<Image> nameOrTagsLike = Specification.anyOf(nameLike, tagsLike);
            spec = spec.and(nameOrTagsLike);
        }


        return findAll(spec);
    }

}
