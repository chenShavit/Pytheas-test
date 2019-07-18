import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {users} from '../../static/static';
import {User} from '../../models/user';
import { Trip } from '../../models/trip';
import { Place } from '../../models/place';

@Component({
  selector: 'choose-profile',
  templateUrl: './choose-profile.component.html',
  styleUrls: ['./choose-profile.component.scss'],
})
export class ChooseProfileComponent implements OnInit {
  
  constructor(private menu: MenuController) { }

    tags=[{name:'Art', icon:"/assets/user.png"},{name:'Bachelors',icon:"/assets/user.png"},{name:'Family', icon:"/assets/user.png"},{ name:'Add Profile', icon:"/assets/plus-black-symbol.png"}];
  ngOnInit() {

   
    }
  }


