package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;
 
@Component
 
// Spring jpa jars.
@Entity
@Table(name= "emp99")
 
// To increase speed and save sql statement execution time.
@DynamicInsert
@DynamicUpdate
public class Employee {

	
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String name;
    private String designation;
    private String place;
    private String email;
    private String phone;
 
    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Employee() { }
 
	public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDesignation() {
        return designation;
    }
    public void setDesignation(String designation) {
        this.designation = designation;
    }
    public String getPlace() {
        return place;
    }
    public void setPlace(String place) {
        this.place = place;
    }
 
    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", department=" + designation + ", place="
                               + place + ", email=" + email + ", phone=" + phone + "]";
    }
}
