package io.gituhub.jfelixy.imagevaultapi.infra.repository;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
