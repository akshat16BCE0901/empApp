package com.akshat.service;

import com.akshat.generators.JiraStatusChangeMail;
import com.akshat.model.Jira;
import com.akshat.repository.JiraRepository;
import com.akshat.senders.SendWithAttachments;
import com.akshat.senders.SendWithoutAttachments;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "JiraService")
public class JiraService {

    @Resource(name = "JiraRepository")
    private JiraRepository jiraRepository;

    @Resource(name = "jiraStatusChangeMail")
    private JiraStatusChangeMail jiraStatusChangeMail;

    @Resource(name = "sendWithoutAttachments")
    private SendWithoutAttachments sendWithoutAttachments;

    public Jira addJira(Jira jira)
    {
        return jiraRepository.save(jira);
    }

    public List<Jira> viewAll()
    {
        return jiraRepository.findAll();
    }

    public Optional<Jira> findJira(Long id)
    {
        return jiraRepository.findById(id);
    }

    public List<JSONObject> getJiraStatus()
    {
        List<JSONObject> arr = new ArrayList<>();
        List<Object[]> status = jiraRepository.getJiraStatus();
        for(Object[] obj : status)
        {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("status",obj[0]);
            jsonObject.put("count",obj[1]);
            arr.add(jsonObject);
        }
        return arr;
    }

    public void updateStatus(Long jiraId,String oldStatus, String newStatus)
    {
        jiraRepository.updateStatus(jiraId,newStatus);
        try{
            jiraStatusChangeMail.make_message(oldStatus,newStatus,jiraId);
            Optional<Jira> jiraDetails = jiraRepository.findById(jiraId);
            sendWithoutAttachments.setSubject("Jira Status Change");
            sendWithoutAttachments.setTo("akshat.yash@rediffmail.com");
            sendWithoutAttachments.setMessage(jiraStatusChangeMail.getMessage());
            sendWithoutAttachments.sendMail();
        }
        catch (MessagingException e){
            e.printStackTrace();
        }

    }

}
