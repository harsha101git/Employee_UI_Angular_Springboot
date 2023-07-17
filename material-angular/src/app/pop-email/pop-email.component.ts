import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserdataComponent } from '../components/userdata/userdata.component';

@Component({
  selector: 'app-pop-email',
  templateUrl: './pop-email.component.html',
  styleUrls: ['./pop-email.component.css']
})
export class PopEmailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserdataComponent>,
    private userService: UserService, ) { }

  ngOnInit() {
  }

  

}
