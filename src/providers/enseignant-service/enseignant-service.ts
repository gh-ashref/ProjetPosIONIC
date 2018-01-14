import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');


import { Injectable } from '@angular/core';


@Injectable()
export class EnseignantServiceProvider {

  constructor(public http: HttpClient) {  }

  getEnseignants() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/enseignant/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getEnseignant(id) {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/enseignant/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addEnseignant(body) {
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/enseignant/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  editEnseignant(body) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/enseignant/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deletteEnseignant(id) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:8080/api/enseignant/' + id, { headers }).subscribe(data => {
      resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
