package com.akshat.repository;

import com.akshat.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository(value = "ProjectRepository")
public interface ProjectRepository extends JpaRepository<Project,Long> {

}
