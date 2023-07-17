import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup,
   Validators ,FormsModule,NgForm } from '@angular/forms'; 


@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit   {


  myFormGroup: FormGroup;
id: number;
name: String;
designation: String;
place: String;
user: User = new User();
submitted = false;

  constructor(private route: ActivatedRoute,private router: Router, 
    private formBuilder: FormBuilder
   , private userService: UserService) { }

  ngOnInit() {
    //this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
        this.updateEmployee();
      }, error => console.log(error));
//this.updateEmployee();
  }

  updateEmployee():void {
    
  this.myFormGroup = this.formBuilder.group({
  id: [this.user.id,[]],
  name:  [this.user.name,Validators.required, []],
  place: [this.user.place,Validators.required,[]],
  designation: [this.user.designation,Validators.required,[]],
  email: [this.user.email,Validators.required,[]],
  phone: [this.user.phone,Validators.required,[]]


}); 


}

save() {

  //this.createEmployee();
      this.userService.updateEmployee(this.myFormGroup.value)
      .subscribe(data => this.gotoList(), 
      error => console.log(error) );
    // this.user = new User();
    

}


onSubmit() {
  this.submitted = true;
     
  this.save();
}

gotoList() {
  this.router.navigate(['/list']);
}
}
