package io.gituhub.jfelixy.imagevaultapi.application.users;

import io.gituhub.jfelixy.imagevaultapi.domain.AccessToken;
import io.gituhub.jfelixy.imagevaultapi.domain.entity.User;
import io.gituhub.jfelixy.imagevaultapi.domain.exception.DuplicatedTupleException;
import io.gituhub.jfelixy.imagevaultapi.domain.service.UserService;
import io.gituhub.jfelixy.imagevaultapi.infra.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        //Verify if user exists and throws an exception
        var possibleUser = getByEmail(user.getEmail());
        if (possibleUser != null){
            throw new DuplicatedTupleException("User already exists!");
        }
        return userRepository.save(user);
    }

    @Override
    public AccessToken authenticate(String email, String password) {
        return null;
    }
}
