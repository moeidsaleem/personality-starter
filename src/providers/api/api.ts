import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor() {
    console.log('Hello ApiProvider Provider');
  }



  data={
    fullname:"Imran Ahmed Khan Niazi",
    dob:"1994/12/12",
    birthPlace:"Mianwali",

  }
}
