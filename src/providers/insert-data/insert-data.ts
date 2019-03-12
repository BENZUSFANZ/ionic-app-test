import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'; //import map
import { Http } from '@angular/http'; // import http

/*
  Generated class for the InsertDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class InsertDataProvider {

  // Http
  constructor(public http: Http) {
    console.log('Hello InsertDataProvider Provider');
  }

  // ป้องข้อมูลลงในฐานข้อมูล
  InsertData(Name, LastName){

    console.log("NameP = ",Name)  //test value

    let url = "http://localhost/ionic/InsertData.php";

    let formData = new FormData();  //library

    formData.append('Name', Name);
    formData.append('LastName', LastName);

    let response = this.http.post(url, formData);
    return response;

  }

  // ดึงข้อมูลมาแสดง
  Show(){

    var url = "http://localhost/ionic/SelectData.php";

    var response = this.http.get(url).map(res => res.json());
    return response;
    
  }

}
