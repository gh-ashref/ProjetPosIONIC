import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
.set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');


@Injectable()
export class GroupeServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GroupeServiceProvider Provider');
  }

  getGroupes() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/groupe/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupe(id) {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/groupe/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addGroupe(body) {
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/groupe/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  editGroupe(body) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/groupe/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deletteGroupe(id) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:8080/api/groupe/' + id, { headers }).subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
