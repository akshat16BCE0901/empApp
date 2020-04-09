package com.akshat.config;

import com.akshat.generators.JiraStatusChangeMail;
import com.akshat.senders.SendWithAttachments;
import com.akshat.senders.SendWithoutAttachments;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MailConfig {

    @Bean(name="jiraStatusChangeMail")
    public JiraStatusChangeMail jiraStatusChangeMail(){
        return new JiraStatusChangeMail();
    }

    @Bean(name = "sendWithAttachments")
    public SendWithAttachments sendWithAttachments()
    {
        return new SendWithAttachments();
    }

    @Bean(name ="sendWithoutAttachments")
    public SendWithoutAttachments sendWithoutAttachments()
    {
        return new SendWithoutAttachments();
    }

}
