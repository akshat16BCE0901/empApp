package com.akshat.agileapp;

import com.akshat.EmpManagementApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackageClasses = EmpManagementApplication.class)
public class AgileAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(AgileAppApplication.class,args);
    }

}
