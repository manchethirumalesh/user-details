import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  users : any[] = []
  page : number = 1;

  constructor(private service : SharedService) { }

  ngOnInit(): void {

      this.service.getusers().subscribe((data)=>{
        let user_page1 : any
        user_page1= data
        for(let i=0;i<user_page1.data.length; i++){
             this.users.push(user_page1.data[i])
        }
      })

      this.service.getusers2().subscribe((data)=>{
        let user_page2 : any
        user_page2 = data
        for(let i=0;i<user_page2.data.length; i++){
          this.users.push(user_page2.data[i])
        }
      })

  }
  

}
