import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DetailHomePage} from '../detail-home/detail-home';

import {InsertDataProvider} from "../../providers/insert-data/insert-data"; //provider api

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  Name: ""; //กำหนดตัวแปร
  LastName: "";

  constructor(public navCtrl: NavController,
    public insert: InsertDataProvider) {  //import Provider

    this.navCtrl = navCtrl
  
  }

  //funtion จาก .html
  Send(Name,LastName){

    this.insert.InsertData(Name,LastName).subscribe(data => { 

      console.log("data = ",data) //test value

    })
    
    // เช็คค่า ว่ามาไหม ที่ Console
    console.log("name :" + Name);
    console.log("lastname :" + LastName);

    // clear ข้อมูลที่ป้อน
    this.Name="";
    this.LastName=""; 
  }

  //to page
  DetailHome(){
    this.navCtrl.push(DetailHomePage)
  }

}
