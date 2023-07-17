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
import org.springframework.stereotype.Service;

import com.example.demo.Mydaorepository;

import com.example.demo.Employee;

@Service
public class Myserviceimpl implements MyService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public void MailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	@Autowired
    Mydaorepository dao;

    
	@Override
	public List<Employee> getEmployees() {
		return dao.findAll();
	}
    @Override
	public Optional<Employee> getEmployeeById(int empid) {
		return dao.findById(empid);
	}
    @Override
	public Employee addNewEmployee(Employee emp) {
		return dao.save(emp);
	}
    @Override
	public Employee updateEmployee(Employee emp) {
		return dao.save(emp);
	}
    @Override
	public void deleteEmployeeById(int empid) {
		dao.deleteById(empid);
	}
    @Override
	public void deleteAllEmployees() {
		dao.deleteAll();
	}
   

    
	public void sendEmail(Employee employee) throws MailException {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(employee.getEmail());
		mail.setSubject("Greeting from Harsha");
		mail.setText("Hi dear candidate. Please go through the below link for the registartion");
		javaMailSender.send(mail);
	}
 
//	"Mail sending operation has done successfully....!" + '\n' + '\n' + "for more details go through this link about sensei company " 
//	+ '\n' + "https://www.zaubacorp.com/company/SEN-SEI-TECHNOLOGIES-PRIVATE-LIMITED/U72900KA2007PTC044013"
    
}


