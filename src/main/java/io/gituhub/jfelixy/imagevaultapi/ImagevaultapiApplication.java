package io.gituhub.jfelixy.imagevaultapi;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;
import io.gituhub.jfelixy.imagevaultapi.infra.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ImagevaultapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImagevaultapiApplication.class, args);
	}

}
