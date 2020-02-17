package com.akshat.service;

import com.akshat.model.Jira;
import com.akshat.repository.JiraRepository;
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

}
