package com.akshat.controller;

import com.akshat.model.Employee;
import com.akshat.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Resource(name = "EmployeeService")
    private EmployeeService employeeService;

    @PostMapping(value = "/add")
    public Employee addEmployee(@RequestBody Employee employee)
    {
        //Employee emp = new Employee("Akshat","Singhal","612, Jawahar Colony, New Mandi, Muzaffarnagar","+919629000816","akshat.yash@rediffmail.com","1998-12-16");
        return employeeService.add(employee);
    }

    @GetMapping(value = "/viewall")
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAll();
    }

    @GetMapping(value = "/view/{id}")
    public Optional<Employee> getEmployee(@PathVariable Long id)
    {
        return employeeService.getEmployee(id);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteEmployee(@PathVariable Long id)
    {
        employeeService.deleteEmployee(id);
    }

}
