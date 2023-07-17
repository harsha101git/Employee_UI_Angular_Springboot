import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/models/user.model';

import { UserService } from 'src/app/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserdataComponent } from '../userdata/userdata.component';
//import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
 
})
export class PopComponent implements OnInit {
 id: Number;
  user: User;

  
  constructor( public dialogRef: MatDialogRef<UserdataComponent>,
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     this.user = data;
     }

  ngOnInit() {
    //this.gotoList();
   }


    onNoClick(user: User) {
      this.userService.deleteEmployee(user)
        .subscribe(
          data => this.gotoList(),
          error => console.log(error));
         
          this.dialogRef.close();
       
  }


  cancel(){
this.dialogRef.close();
  }

  gotoList(){
    this.router.navigate(['\list']);
  }
 
 

}
