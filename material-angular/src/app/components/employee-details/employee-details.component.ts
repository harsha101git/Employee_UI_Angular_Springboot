import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  formGroup: FormGroup;
  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService,
    private fb:FormBuilder) {    }




  ngOnInit() {

  

   this.user = new User();
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getEmployee(this.id)
      .subscribe( (data: User) => {
        console.log(data)
        this.user = data;
       
      }, error => console.log(error));
    
  }





  list(){
    this.router.navigate(['/list']);
  }

}
