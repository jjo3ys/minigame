package com.GROCK;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MiniGameApplication {

	public static void main(String[] args) {
		SpringApplication.run(MiniGameApplication.class, args);
	}

}
