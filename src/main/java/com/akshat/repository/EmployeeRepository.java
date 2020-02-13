package com.akshat.repository;

import com.akshat.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository(value = "EmployeeRepository")
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
