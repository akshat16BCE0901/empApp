package com.akshat.controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/jira")
public class JiraController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ModelAndView viewJiraPage()
    {
        ModelAndView model = new ModelAndView("jira");
        model.addObject("userset",true);
        return model;

    }

}
