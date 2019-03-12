import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DetailContactPage} from '../detail-contact/detail-contact'; //Import Page

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  /*Add Button Click to page*/
  DetailContact(){

    this.navCtrl.push(DetailContactPage)

  }

}
