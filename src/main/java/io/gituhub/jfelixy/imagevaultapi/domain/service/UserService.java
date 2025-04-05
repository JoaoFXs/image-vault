package io.gituhub.jfelixy.imagevaultapi.domain.service;

import io.gituhub.jfelixy.imagevaultapi.domain.AccessToken;

public interface UserService {

    User getByEmail(String email);

    User save(User user);

    AccessToken authenticate(String email, String password);

}
