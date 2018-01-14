import { SalleServiceProvider } from './../../providers/salle-service/salle-service';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, ViewController, ModalController, IonicPage } from 'ionic-angular';



@Component({
  selector: 'page-salle-list',
  templateUrl: 'salle-list.html',
})

export class SalleListPage {
  public salles;

  salle = {
    libelle: '',
    etage: '',
    capacite: '',
    id: ''
  };

  constructor(public modalCtrl: ModalController, public salleService: SalleServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalleListPage');
  }


  open(id) {

    this.salleService.getSalle(id).then(data => {
      this.salle.libelle = data['libelle'];
      this.salle.capacite = data['capacite'];
      this.salle.etage = data['etage'];
      this.salle.id = id;
      let modal = this.modalCtrl.create(ModalContentPageSalle, { "salle": this.salle });
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

    this.salleService.getSalles().then(data => {
      this.salles = data;
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
<ion-label color="primary">Libelle :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="salle.libelle"></ion-input>
</ion-item>


<ion-item>
<ion-label color="primary">Etage :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="salle.etage"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Capacite :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="salle.capacite"></ion-input>
</ion-item>

<div style="margin-left:30%">
<button ion-button icon-only color="secondary" clear (click)='edit(salle.id)'>
<ion-icon ios="ios-construct" md="md-construct"></ion-icon>
</button>

<button ion-button icon-only color="danger" clear (click)='showConfirm(salle.id)'>
<ion-icon color="danger" ios="ios-trash" md="md-trash"></ion-icon>
</button>
</div>

     </ion-list>
</ion-content>
`
})

export class ModalContentPageSalle {

  salle = {
    libelle: '',
    etage: '',
    capacite: '',
    id: ''
  };
  character;
  dis = "true";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public salleService: SalleServiceProvider
  ) {

    this.salle = this.params.get("salle");

  }

  edit(id) {
    console.log(id);
    if (this.dis == "false") {
      if (this.salle.libelle === '' || this.salle.etage === '' || this.salle.capacite === '' || this.salle.libelle === undefined || this.salle.etage === undefined || this.salle.capacite === undefined) {
        alert('Vous devez remplir le formulaire correctement');
      } else {
        this.salleService.editSalle(this.salle).then(data => {
        });
      }

      this.dis = "true";
    }
    else {


      this.dis = "false"
    }

  }



  delete(id) {
    this.salleService.deletteSalle(id).then(data => {
      this.dismiss();
    });

  }

  showConfirm(id) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Tu es sur de supprimer ce Salle',
      buttons: [
        {
          text: 'Non',
          handler: () => {

          }
        },
        {
          text: 'Oui',
          handler: () => {
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

