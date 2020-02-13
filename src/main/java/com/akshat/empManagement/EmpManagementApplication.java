package com.akshat.empManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

@SpringBootApplication
@ComponentScan("com.akshat")
@EntityScan("com.akshat.model")
@EnableJpaRepositories(value = "com.akshat.repository")
public class EmpManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpManagementApplication.class, args);
	}

}
