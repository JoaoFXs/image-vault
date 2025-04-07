package io.gituhub.jfelixy.imagevaultapi.application.jwt;

import io.gituhub.jfelixy.imagevaultapi.domain.AccessToken;
import io.gituhub.jfelixy.imagevaultapi.domain.entity.User;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    @Autowired
    private SecretKeyGenerator keyGenerator;

    public AccessToken generateToken(User user){

        SecretKey key = keyGenerator.getKey();//Token to sign
        Date expirationDate = generateExpirationDate();
        Map<String, Object> claims = generateTokenClaims(user);
        String token = Jwts
                        .builder()
                        .signWith(key)//Token to sign
                        .subject(user.getEmail())//Unique Id to identify user
                        .expiration(expirationDate)//Expiration
                        .claims(claims)//Information used in the token
                        .compact();

        return new AccessToken("");
    }
    private Date generateExpirationDate(){
        //Capture current hour and include 60 seconds to expiration
        var expirationMinutes = 60;
        LocalDateTime now = LocalDateTime.now().plusMinutes(expirationMinutes);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());//Capture country reference through your system
    }

    //Method to insert claims in the token
    private Map<String, Object> generateTokenClaims(User user){
        Map<String, Object> claims = new HashMap<>();
        claims.put("name", user.getName());
        return claims;
    }
}
