import { SeanceServiceProvider } from './../../providers/seance-service/seance-service';
import { SalleServiceProvider } from './../../providers/salle-service/salle-service';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NavController, NavParams, Platform, ViewController, AlertController, ModalController } from 'ionic-angular';

/**
 * Generated class for the SeanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-seance-list',
  templateUrl: 'seance-list.html',
})
export class SeanceListPage {
  public seances;
  
    seance = {
      libelleSeance: '',
      heureDebut: '',
      heureFin: '',
      id: '',
      date : ''
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public seanceService: SeanceServiceProvider,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeanceListPage');
  }
  open(id) {
    
    this.seanceService.getSeance(id).then(data => {
      this.seance.date = data['date'];
      this.seance.heureDebut = data['heureDebut'];
      this.seance.heureFin = data['heureFin'];
      this.seance.libelleSeance = data['libelleSeance'];
      this.seance.id = id;
      let modal = this.modalCtrl.create(ModalContentPageSeance, { "seance": this.seance });
      modal.present();
    });
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.ngOnInit();
      refresher.complete();
    }, 2000);
    this.navCtrl.setRoot('SalleListPage',{opt:{dismiss:false,redirect:"this.redirect"}});  
  }

  ngOnInit() {
    
        this.seanceService.getSeances().then(data => {
          this.seances= data;
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
<ion-label color="primary">Libelle Seance :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="seance.libelleSeance"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Capacite :</ion-label>
<ion-input placeholder="Time Input" [disabled]="dis" [(ngModel)]="seance.heureDebut"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Heure Fin :</ion-label>
<ion-input placeholder="Time Input" [disabled]="dis" [(ngModel)]="seance.heureFin"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Heure Fin :</ion-label>
<ion-input placeholder="date Input" [disabled]="dis" [(ngModel)]="seance.date"></ion-input>
</ion-item>


<div style="margin-left:30%">
<button ion-button icon-only color="secondary" clear (click)='edit(seance.id)'>
<ion-icon ios="ios-construct" md="md-construct"></ion-icon>
</button>

<button ion-button icon-only color="danger" clear (click)='showConfirm(seance.id)'>
<ion-icon color="danger" ios="ios-trash" md="md-trash"></ion-icon>
</button>
</div>

     </ion-list>
</ion-content>
`
})

export class ModalContentPageSeance {

  seance = {
    libelleSeance: '',
    heureDebut: '',
    heureFin: '',
    id: '',
    date: ''
  };
  character;
  dis = "true";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public seanceService: SeanceServiceProvider
  ) {

    this.seance = this.params.get("seance");

  }

  edit(id) {
    console.log(id);
    if (this.dis == "false") {
      if (this.seance.libelleSeance === '' || this.seance.heureDebut === '' || this.seance.heureFin === '' || this.seance.date === '' || this.seance.libelleSeance === undefined || this.seance.heureDebut === undefined || this.seance.heureFin === undefined || this.seance.date === undefined) {
        alert('Vous devez remplir le formulaire correctement');
      } else {
        this.seanceService.editSeance(this.seance).then(data => {
        });
      }

      this.dis = "true";
    }
    else {


      this.dis = "false"
    }

  }



  delete(id) {
    this.seanceService.deletteSeance(id).then(data => {
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

