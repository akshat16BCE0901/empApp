package com.akshat.controller;

import com.akshat.model.Jira;
import com.akshat.service.JiraService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jira")
public class JiraController {

    @Resource(name = "JiraService")
    private JiraService jiraService;

    @PostMapping(value = "/add")
    public Jira addJira(@RequestBody Jira jira)
    {
        return jiraService.addJira(jira);
    }

    @GetMapping(value = "/viewall")
    public List<Jira> viewAll()
    {
        return jiraService.viewAll();
    }

    @GetMapping(value = "/view/{id}")
    public Optional<Jira> viewJira(@PathVariable("id") Long id)
    {
        return jiraService.findJira(id);
    }

}
