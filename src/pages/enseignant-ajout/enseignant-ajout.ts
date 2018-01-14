import { EnseignantServiceProvider } from './../../providers/enseignant-service/enseignant-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-enseignant-ajout',
  templateUrl: 'enseignant-ajout.html',
})
export class EnseignantAjoutPage {
 
  enseignant = {
    mail: '',
    nom: '',
    prenom: '',
    telephone: ''
  };

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public enseignantService: EnseignantServiceProvider) {
  }

  ajout() {
    
    if (this.enseignant.nom === '' || this.enseignant.prenom === '' || this.enseignant.mail === '' || this.enseignant.telephone === '' || this.enseignant.nom === undefined || this.enseignant.prenom === undefined || this.enseignant.mail === undefined || this.enseignant.telephone === undefined) {
    } else {
      this.enseignantService.addEnseignant(this.enseignant).then(data => {
      });
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'L"ajout Enseignant Effectuer Avec Succes',
        buttons: ['OK']
      });
      alert.present();
      this.enseignant.mail='' ;
      this.enseignant.telephone='' ;
      this.enseignant.nom='' ;
      this.enseignant.prenom='' ;
       }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnseignantAjoutPage');
  }

}
