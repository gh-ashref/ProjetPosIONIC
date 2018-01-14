import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable()
export class SalleServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SalleServiceProvider Provider');
  }

  getSalles() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/salle/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSalle(id) {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/salle/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addSalle(body) {
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/salle/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  editSalle(body) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/salle/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deletteSalle(id) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:8080/api/salle/' + id, { headers }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
