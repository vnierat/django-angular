import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profiles = [
    {fullName : 'John Smith'},
    {img : 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Flat_Eric_pose_2.jpg'},
    {city: 'Las Vegas, NEVADA'},
    {mail: 'john-smith@hotmail.be'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
