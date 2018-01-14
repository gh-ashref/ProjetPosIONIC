import { CreneauxServiceProvider } from './../../providers/creneaux-service/creneaux-service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, Platform, AlertController } from 'ionic-angular';

/**
 * Generated class for the CreneauxListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-creneaux-list',
  templateUrl: 'creneaux-list.html',
})
export class CreneauxListPage {

  public creneaux;
  creneau = {
    idEnseignant: '',
    idGroupe: '',
    idSeance: '',
    idSalle: '',
    id:''
  };




  constructor(public alertCtrl: AlertController,public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public creneauxService:CreneauxServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnseignantListPage');
  }


  
supprimer(id){
  let confirm = this.alertCtrl.create({
    title: 'Confirmation',
    message: 'Tu es sur de supprimer ce Creneaux',
    buttons: [
      {
        text: 'Non',
        handler: () => {

        }
      },
      {
        text: 'Oui',
        handler: () => {
          this.creneauxService.deletteCreneau(id).then(data => {
            
              });
        }
      }
    ]
  });
  confirm.present();

}


annuller(id){
  let confirm = this.alertCtrl.create({
    title: 'Confirmation',
    message: 'Tu es sur anuller ce Creneaux',
    buttons: [
      {
        text: 'Non',
        handler: () => {

        }
      },
      {
        text: 'Oui',
        handler: () => {
          this.creneauxService.annullerCreneau(id).then(data => {
            
              });
        }
      }
    ]
  });
  confirm.present();

 

}

  doRefresh(refresher) {
    setTimeout(() => {
      this.ngOnInit();
      refresher.complete();
    }, 2000);
  }


  ngOnInit() {

    this.creneauxService.getCreneaux().then(data => {
      this.creneaux = data;
    });

  }
}
