package io.gituhub.jfelixy.imagevaultapi.application.users;

import lombok.Data;

@Data
public class UserDTO {
    private String name;
    private String email;
    private String password;
}
