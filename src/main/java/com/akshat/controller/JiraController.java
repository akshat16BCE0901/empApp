package com.akshat.controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/jira")
public class JiraController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String viewJiraPage(Model model)
    {
        model.addAttribute("userset",true);
        return "jira";

    }

}
