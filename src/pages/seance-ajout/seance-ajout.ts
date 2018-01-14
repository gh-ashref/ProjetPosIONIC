import { SeanceServiceProvider } from './../../providers/seance-service/seance-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SeanceAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-seance-ajout',
  templateUrl: 'seance-ajout.html',
})
export class SeanceAjoutPage {
  seance = {
    libelleSeance: '',
    heureDebut: '',
    heureFin: '',
    date: ''
  };
  constructor(public alertCtrl: AlertController,public seanceService: SeanceServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeanceAjoutPage');
  }
  ajout() {
    // tslint:disable-next-line:one-line
    // tslint:disable-next-line:max-line-length
    if (this.seance.libelleSeance === '' || this.seance.heureDebut === '' || this.seance.heureFin === '' || this.seance.date === '' || this.seance.libelleSeance === undefined || this.seance.heureDebut === undefined || this.seance.heureFin === undefined || this.seance.date === undefined) {
    } else {
      this.seanceService.addSeance(this.seance).then(data => {
      });
      console.log(this.seance);
      let alert = this.alertCtrl.create({
        title: 'Nouvelle Seance!',
        subTitle: 'L"ajout Seance Effectuer Avec Succes',
        buttons: ['OK']
      });

      alert.present();
      this.seance.date='' ;
      this.seance.libelleSeance='' ;
      this.seance.heureFin='' ;
      this.seance.heureDebut='' ;
      
       }
    }
  }
