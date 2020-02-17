package com.akshat.service;

import com.akshat.model.Project;
import com.akshat.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service(value = "ProjectService")
public class ProjectService {

    @Resource(name = "ProjectRepository")
    private ProjectRepository projectRepository;

    public Project addProject(Project project)
    {
        return projectRepository.save(project);
    }

    public List<Project> viewAllProjects()
    {
        return projectRepository.findAll();
    }

    public Optional<Project> viewProject(Long id)
    {
        return projectRepository.findById(id);
    }
}
