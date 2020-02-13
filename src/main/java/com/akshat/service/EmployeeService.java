package com.akshat.service;

import com.akshat.model.Employee;
import com.akshat.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service(value = "EmployeeService")
public class EmployeeService {

    @Resource(name = "EmployeeRepository")
    private EmployeeRepository employeeRepository;

    public Employee add(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAll()
    {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployee(Long id)
    {
        return employeeRepository.findById(id);
    }

    public void deleteEmployee(Long id)
    {
        employeeRepository.deleteById(id);
    }



}
