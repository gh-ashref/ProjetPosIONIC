import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



import 'rxjs/add/operator/map';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');


/*


  Generated class for the AcceuilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcceuilProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AcceuilProvider Provider');
  }
  getAccuille() {
    return new Promise(resolve => {
        this.http.get('http://localhost:8080/api/creneau/compteur/' ).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });

}
}