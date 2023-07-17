package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

public interface MyService {

	public List<Employee> getEmployees();

	public Optional<Employee> getEmployeeById(int empid);
	
	public Employee addNewEmployee(Employee emp);

	public Employee updateEmployee(Employee emp);

	public void deleteEmployeeById(int empid);

	public void deleteAllEmployees();
	
	public void sendEmail(Employee employee) throws MailException;

    
 
    

	
}
