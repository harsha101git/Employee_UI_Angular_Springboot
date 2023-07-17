package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
import com.example.demo.Employee;
import com.example.demo.MyService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MyController {
	
	@Autowired
	MyService service;
	
	@Autowired
	Myserviceimpl serviceimpl;
	
	@Autowired 
	Employee employee;
	 
    @RequestMapping(value= "/emp99/all", method= RequestMethod.GET)
    public List<Employee> getEmployees() {
//        System.out.println(this.getClass().getSimpleName() + " - Get all employees service is invoked.");
        return service.getEmployees();
    }
 
    @RequestMapping(value= "/emp99/{id}", method= RequestMethod.GET)
    public Employee getEmployeeById(@PathVariable int id) throws Exception {
//        System.out.println(this.getClass().getSimpleName() + " - Get employee details by id is invoked.");
 
        Optional<Employee> emp =  service.getEmployeeById(id);
        if(!emp.isPresent())
            throw new Exception("Could not find employee with id- " + id);
 
        return emp.get();
    }
 
    @RequestMapping(value= "/emp99/add", method= RequestMethod.POST)
    public Employee createEmployee(@RequestBody Employee newemp) {
//        System.out.println(this.getClass().getSimpleName() + " - Create new employee method is invoked.");
        return service.addNewEmployee(newemp);
    }
 
    @RequestMapping(value= "/emp99/update/{id}", method= RequestMethod.PUT)
    public Employee updateEmployee(@RequestBody Employee updemp, @PathVariable int id) throws Exception {
//        System.out.println(this.getClass().getSimpleName() + " - Update employee details by id is invoked.");
 
        Optional<Employee> emp =  service.getEmployeeById(id);
        if (!emp.isPresent())
            throw new Exception("Could not find employee with id- " + id);
 
      
        if(updemp.getName() == null || updemp.getName().isEmpty())
            updemp.setName(emp.get().getName());
        if(updemp.getDesignation() == null || updemp.getDesignation().isEmpty())
            updemp.setDesignation(emp.get().getDesignation());
        if(updemp.getPlace() == null || updemp.getPlace().isEmpty())
            updemp.setPlace(emp.get().getPlace());
        if(updemp.getEmail() == null || updemp.getEmail().isEmpty())
        	updemp.setEmail(emp.get().getEmail());
        if(updemp.getPhone() == null || updemp.getPhone().isEmpty())
        	updemp.setPhone(emp.get().getPhone());
 
       
        updemp.setId(id);
        return service.updateEmployee(updemp);
    }
 
    @RequestMapping(value= "/emp99/delete/{id}", method= RequestMethod.DELETE)
    public void deleteEmployeeById(@PathVariable int id) throws Exception {
//        System.out.println(this.getClass().getSimpleName() + " - Delete employee by id is invoked.");
 
        Optional<Employee> emp =  service.getEmployeeById(id);
        if(!emp.isPresent())
            throw new Exception("Could not find employee with id- " + id);
 
        service.deleteEmployeeById(id);
    }
 
    @RequestMapping(value= "/emp99/deleteall", method= RequestMethod.DELETE)
    public void deleteAll() {
//        System.out.println(this.getClass().getSimpleName() + " - Delete all employees is invoked.");
        service.deleteAllEmployees();
    }
    


  @RequestMapping(value="send_mail/{email}" , method= RequestMethod.GET)
	public void send(@PathVariable String email) {
 // 	employee.setEmail(email);
  	try {
  		employee.setEmail(email);
  		serviceimpl.sendEmail(employee);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
  }
    
    
    
    
}
    
//    
//    //for mail sending 
//    @RequestMapping("send-mail")
//	public String send() {
//    	employee.setEmail("chitranadig46@gmail.com");
//    	try {
//    		implservice.sendEmail(employee);
//		} catch (MailException mailException) {
//			System.out.println(mailException);
//		}
//		return "Congratulations! Your mail has been send to the user.";
//    }
//    
//    
//    //for mail attachment
//    @RequestMapping("send-mail-attachment")
//	public String sendWithAttachment() throws MessagingException {
//    	employee.setEmail("harsha.appu02@gmail.com");
//    	try {
//    		implservice.sendEmailWithAttachment(employee);
//		} catch (MailException mailException) {
//			System.out.println(mailException);
//		}
//		return "Congratulations! Your mail has been send to the user.";
//	}
//    }
//
//
