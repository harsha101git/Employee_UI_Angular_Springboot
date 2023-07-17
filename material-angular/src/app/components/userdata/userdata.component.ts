import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';

//import { MatDialog } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopComponent } from '../pop/pop.component';
import { PopEmailComponent } from 'src/app/pop-email/pop-email.component';



@Component({
  selector: 'userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  dataSource: any;
  DisplayColumns = [ 'id', 'name',  'email', 'phone' , 'place', 'designation', 'edit', 'delete','details', 'send' ];
  
  users: User;
  

   constructor(private userService: UserService,
     private router: Router,private dialog: MatDialog
   ) { }
  
  
  ngOnInit() { 
    this.getUser();
  }

  public getUser(){
    this.userService.getUser()
      .subscribe((data: any) => {
     this.users = data;
     this.dataSource = this.users;
    });
    }

   

    delete(row: any){
      const dialogRef = this.dialog.open
      (PopComponent, {
        width: '250px',
        data:row,
        disableClose: true
      });
    
      dialogRef.afterClosed().subscribe(result => {  
        this.getUser();       
  });
    }

    send(value: any){
      const dialogRef = this.dialog.open(PopEmailComponent, {
        width: '250px'
      
      });

      this.userService.sendMail(value.email).subscribe(
              data => this.gotoList(),
              error => console.log(error));

    }
  

 details(id:number){
  this.router.navigate(['detail/'+id]);
}
update(id:number){
  this.router.navigate(['update/'+id]);
  }
 
  add(){
    this.router.navigate(['add']);
  }

  
//  public send(value: any){
//     this.userService.sendMail(value.email).subscribe(
//       data => this.gotoList(),
//       error => console.log(error));
//     }
  


  gotoList(){
    this.router.navigate(['\list']);
  }

}








