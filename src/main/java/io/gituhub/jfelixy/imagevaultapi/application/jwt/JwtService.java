package io.gituhub.jfelixy.imagevaultapi.application.jwt;

import io.gituhub.jfelixy.imagevaultapi.domain.AccessToken;
import io.gituhub.jfelixy.imagevaultapi.domain.entity.User;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    public AccessToken generateToken(User user){
        return new AccessToken("");
    }
}
