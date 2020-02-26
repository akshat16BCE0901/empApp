package com.akshat.service;

import com.akshat.model.Jira;
import com.akshat.repository.JiraRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service(value = "JiraService")
public class JiraService {

    @Resource(name = "JiraRepository")
    private JiraRepository jiraRepository;

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

    public JSONObject getJiraStatus()
    {

        JSONObject jsonObject = new JSONObject();
        List<Object[]> status = jiraRepository.getJiraStatus();
        for(Object[] obj : status)
        {
            jsonObject.put(obj[0],obj[1]);
        }
        return jsonObject;
    }

}
