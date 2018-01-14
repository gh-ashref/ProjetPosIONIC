import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
/*
  Generated class for the SeanceServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeanceServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SeanceServiceProvider Provider');
  }
  getSeances() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/seance/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSeance(id) {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/seance/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addSeance(body) {
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/seance/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  editSeance(body) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/seance/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deletteSeance(id) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:8080/api/seance/' + id, { headers }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
