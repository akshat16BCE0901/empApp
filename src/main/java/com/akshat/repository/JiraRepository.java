package com.akshat.repository;

import com.akshat.model.Jira;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository(value = "JiraRepository")
public interface JiraRepository extends JpaRepository<Jira,Long> {
}
