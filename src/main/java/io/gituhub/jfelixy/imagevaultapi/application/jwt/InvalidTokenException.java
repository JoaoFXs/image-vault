package io.gituhub.jfelixy.imagevaultapi.application.jwt;

public class InvalidTokenException extends RuntimeException{

    public InvalidTokenException(String message) {
        super(message);
    }
}
