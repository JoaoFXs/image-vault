package io.gituhub.jfelixy.imagevaultapi.infra.repository.specs;

import org.springframework.data.jpa.domain.Specification;

public class GenericSpecs {
    private GenericSpecs() {}

    public static <T> Specification<T> conjunction(){
        //1 = 1
        // SELECT * FROM IMAGE WHERE 1 = 1/ To all find strategy
        return  (root, q, criteriaBuilder) -> criteriaBuilder.conjunction() ;
    }

}
