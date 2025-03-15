package io.gituhub.jfelixy.imagevaultapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ImagevaultapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImagevaultapiApplication.class, args);
	}

}
