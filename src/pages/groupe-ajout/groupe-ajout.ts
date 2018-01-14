import { GroupeServiceProvider } from './../../providers/groupe-service/groupe-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the GroupeAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-groupe-ajout',
  templateUrl: 'groupe-ajout.html',
})
export class GroupeAjoutPage {
  groupe = {
    libelle: '',
    specialit: '',
    niveau: '',
  };
  
  constructor(public alertCtrl: AlertController,public groupeService: GroupeServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupeAjoutPage');
  }

  ajout() {
    // tslint:disable-next-line:one-line
    // tslint:disable-next-line:max-line-length
    if (this.groupe.libelle === '' || this.groupe.specialit === '' || this.groupe.niveau === ''  || this.groupe.libelle === undefined || this.groupe.specialit === undefined || this.groupe.niveau === undefined) {
    } else {
      this.groupeService.addGroupe(this.groupe).then(data => {
      });
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'L"ajout du groupe Effectuer Avec Succes',
        buttons: ['OK']
      });

      alert.present();
      this.groupe.libelle='' ;
      this.groupe.niveau='' ;
      this.groupe.specialit='' ;
       }
    }
  }


