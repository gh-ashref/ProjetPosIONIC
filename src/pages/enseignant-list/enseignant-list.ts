import { EnseignantServiceProvider } from './../../providers/enseignant-service/enseignant-service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, Platform, AlertController } from 'ionic-angular';

/**
 * Generated class for the EnseignantListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enseignant-list',
  templateUrl: 'enseignant-list.html',
})
export class EnseignantListPage implements OnInit {
  public enseignants;
  enseignant = {
    mail: '',
    nom: '',
    prenom: '',
    telephone: '',
    id: ''
  };







  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public enseignantService: EnseignantServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnseignantListPage');
  }


  open(id) {
    console.log("aaa");
    this.enseignantService.getEnseignant(id).then(data => {
      this.enseignant.nom = data['nom'];
      this.enseignant.prenom = data['prenom'];
      this.enseignant.mail = data['mail'];
      this.enseignant.telephone = data['telephone'];
      this.enseignant.id = id;
      let modal = this.modalCtrl.create(ModalContentPage, { "enseignant": this.enseignant });
      modal.present();
    });
  }


  doRefresh(refresher) {
    setTimeout(() => {
      this.ngOnInit();
      refresher.complete();
    }, 2000);
  }


  ngOnInit() {

    this.enseignantService.getEnseignants().then(data => {
      this.enseignants = data;
    });

  }
}





@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
    </ion-buttons>
    
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
  
  <ion-item>
  <ion-label color="primary">Nom :</ion-label>
  <ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="enseignant.nom"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Prenom :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="enseignant.prenom"></ion-input>
</ion-item>


<ion-item>
<ion-label color="primary">Mail :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="enseignant.mail"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Telephone :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="enseignant.telephone"></ion-input>
</ion-item>

<div style="margin-left:30%">
<button ion-button icon-only color="secondary" clear (click)='edit(enseignant.id)'>
<ion-icon ios="ios-construct" md="md-construct"></ion-icon>
</button>

<button ion-button icon-only color="danger" clear (click)='showConfirm(enseignant.id)'>
<ion-icon color="danger" ios="ios-trash" md="md-trash"></ion-icon>
</button>
</div>

     </ion-list>
</ion-content>
`
})

export class ModalContentPage {
  character;
  dis = "true";
  enseignant = {
    mail: '',
    nom: '',
    prenom: '',
    telephone: '',
    id: ''
  };
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public enseignantService: EnseignantServiceProvider,
    public alertCtrl: AlertController
  ) {

    this.enseignant = this.params.get("enseignant");

  }

  edit(id) {
    if (this.dis == "false") {
      if (this.enseignant.nom === '' || this.enseignant.prenom === '' || this.enseignant.mail === '' || this.enseignant.telephone === '' || this.enseignant.nom === undefined || this.enseignant.prenom === undefined || this.enseignant.mail === undefined || this.enseignant.telephone === undefined) {
        alert('Vous devez remplir le formulaire correctement');
      } else {
        this.enseignantService.editEnseignant(this.enseignant).then(data => {
        });
      }

      this.dis = "true";
    }
    else {


      this.dis = "false"
    }

  }



  delete(id) {
    this.enseignantService.deletteEnseignant(id).then(data => {
      this.dismiss();
    });

  }

  showConfirm(id) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Tu es sur de supprimer ce Enseignant',
      buttons: [
        {
          text: 'Non',
          handler: () => {

          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log(id);
            this.delete(id);
            this.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
