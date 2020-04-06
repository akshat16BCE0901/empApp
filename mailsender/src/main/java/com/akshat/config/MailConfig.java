package com.akshat.config;

import com.akshat.generators.JiraStatusChangeMail;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MailConfig {

    @Bean(name="jiraStatusChangeMail")
    public JiraStatusChangeMail jiraStatusChangeMail(){
        return new JiraStatusChangeMail();
    }


}
