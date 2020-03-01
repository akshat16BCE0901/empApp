package com.akshat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@SpringBootApplication
@EntityScan("com.akshat.model")
@EnableJpaRepositories(value = "com.akshat.repository")
public class EmpManagementApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(EmpManagementApplication.class);
	}



	public static void main(String[] args) {
		System.out.println("\t\t\t/\\\t\t\t  ____     _____   ____     _____    ______________\n" +
				"\t\t   /  \\\t\t\t |    |   /    /  |    |   /    /   |\t\t       |  \n" +
				"\t\t  /    \\\t\t |    |  /    /   |    |  /    /  \t|_____\t  _____|\n" +
				"\t\t /      \\\t\t |    | /    /\t  |    | /    /\t\t\t |    |\n" +
				"\t\t/   /\\   \\\t\t |    |/    /     |    |/    /\t\t\t |    |\n" +
				"\t   /   /__\\   \\\t\t |         /\t  |         /\t\t     |    |\n" +
				"\t  /            \\\t |         \\\t  |         \\\t\t     |    |\n" +
				"\t /    ______    \\    |    |\\    \\\t  |    |\\    \\\t\t     |    |\n" +
				"\t/    /      \\    \\\t |    | \\    \\\t  |    | \\    \\\t     ____|    |____\n" +
				"   /    /        \\    \\\t |    |  \\    \\   |    |  \\    \\\t|\t\t\t   |\n" +
				"  /____/\t\t  \\____\\ |____|   \\____\\  |____|   \\____\\   |______________|");
		SpringApplication.run(EmpManagementApplication.class, args);
	}

}

@Configuration
class WebConfig implements WebMvcConfigurer
{
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}


}

@Configuration
@EnableWebSocketMessageBroker
class WebSocketConfig implements WebSocketMessageBrokerConfigurer{

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/myendpoint").withSockJS();
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableSimpleBroker("/topic");
		registry.setApplicationDestinationPrefixes("/app");
	}


}