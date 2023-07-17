import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  

  public userGroup: FormGroup;
  user: User = new User();

  submitted = false;
  
  constructor(private userService: UserService,
    private router: Router, 
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.createEmployee();
   
  }


  createEmployee(): void {

    this.userGroup = this.formBuilder.group({
      name:  ['', Validators.required,[]],
      place: ['',Validators.required,[]],
      designation: ['',Validators.required,[]],
      email: ['',Validators.required,[]],
      phone: ['',Validators.required,[]]
    });

    
         
  }

  save() {

    //this.createEmployee();
        this.userService.createEmployee(this.userGroup.value)
        .subscribe(data => this.gotoList(), 
        error => console.log(error) );
      // this.user = new User();
      
 
  }
 

  onSubmit() {
        this.submitted = true;
     
        this.save();
     //   this.gotoList();  
     // this.ngOnInit(); 
        
        
      }
     
      gotoList() {
        this.router.navigate(['/list']);
      }
    

}
