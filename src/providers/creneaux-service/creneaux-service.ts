import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');


@Injectable()
export class CreneauxServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CreneauxServiceProvider Provider');
  }
  getCreneaux() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/creneau/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCreneau(id) {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/creneau/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addCreneau(body) {
    return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      this.http.post('http://localhost:8080/api/creneau/?idGroupe=' + body.idGroupe + '&idEnseignant=' + body.idEnseignant + '&idSalle=' + body.idSalle + '&idSeance=' + body.idSeance, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
  editCreneau(body) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/creneau/', body, { headers }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }


  annullerCreneau(id) {
    return new Promise(resolve => {
      this.http.put('http://localhost:8080/api/creneau/annuller/' + id, { headers }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deletteCreneau(id) {
    return new Promise(resolve => {
      this.http.delete('http://localhost:8080/api/creneau/' + id, { headers }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
