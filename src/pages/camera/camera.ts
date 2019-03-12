import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {InsertDataProvider} from "../../providers/insert-data/insert-data"; //provider api

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

    //กำหนดเเปรจาก .html
  name: any;
  lastname: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
       public getData: InsertDataProvider) {

        this.navCtrl = navCtrl

  }

  //main function
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');

    this.showD(); //ฟังก์ชัน

  }

  
  showD(){

    this.getData.Show().subscribe(data => {

      console.log("ข้อมูล:",data);
     
      this.name = data.Name;  //อ้างตัวแปรจาก html และอ้างตัวแปร php
      this.lastname = data.LastName;  //อ้างตัวแปรจาก html และอ้างตัวแปร php

    })

  }

}
