package com.akshat.repository;

import com.akshat.model.Jira;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "JiraRepository")
public interface JiraRepository extends JpaRepository<Jira,Long> {

    @Query(value = "select status, count(*) as status_count from jira group by status", nativeQuery = true)
    public List<Object[]> getJiraStatus();

}
