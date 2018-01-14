import { SalleServiceProvider } from './../../providers/salle-service/salle-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SalleAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-salle-ajout',
  templateUrl: 'salle-ajout.html',
})
export class SalleAjoutPage {
  salle = {
    libelle: '',
    etage: '',
    capacite: '',
  };
  
  constructor(public alertCtrl: AlertController,public salleService: SalleServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalleAjoutPage');
  }
  ajout() {
    // tslint:disable-next-line:one-line
    // tslint:disable-next-line:max-line-length
    if (this.salle.libelle === '' || this.salle.etage === '' || this.salle.capacite === '' || this.salle.libelle === undefined || this.salle.etage === undefined || this.salle.capacite === undefined) {
    } else {
      this.salleService.addSalle(this.salle).then(data => {
      });
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'L"ajout Salle Effectuer Avec Succes',
        buttons: ['OK']
      });

      alert.present();
      this.salle.libelle='' ;
      this.salle.etage='' ;
      this.salle.capacite='' ;
       }
    }
  }
