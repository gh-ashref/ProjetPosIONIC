import { GroupeServiceProvider } from './../../providers/groupe-service/groupe-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the GroupeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-groupe-list',
  templateUrl: 'groupe-list.html',
})
export class GroupeListPage implements OnInit {
  public groupes;
  
  groupe = {
    libelle: '',
    specialit: '',
    niveau: '',
    id: ''
  };
  
  constructor(public groupeService: GroupeServiceProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupeListPage');
  }


  open(id) {
    console.log("aaa");
    this.groupeService.getGroupe(id).then(data => {
      this.groupe.libelle = data['libelle'];
      this.groupe.niveau = data['niveau'];
      this.groupe.specialit = data['specialit'];
      this.groupe.id = id;
      let modal = this.modalCtrl.create(ModalContentPageGroupe, { "groupe": this.groupe });
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
    
        this.groupeService.getGroupes().then(data => {
          this.groupes = data;
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
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="groupe.libelle"></ion-input>
</ion-item>


<ion-item>
<ion-label color="primary">Spécialité :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="groupe.specialit"></ion-input>
</ion-item>

<ion-item>
<ion-label color="primary">Niveau :</ion-label>
<ion-input placeholder="Text Input" [disabled]="dis" [(ngModel)]="groupe.niveau"></ion-input>
</ion-item>

<div style="margin-left:30%">
<button ion-button icon-only color="secondary" clear (click)='edit(groupe.id)'>
<ion-icon ios="ios-construct" md="md-construct"></ion-icon>
</button>

<button ion-button icon-only color="danger" clear (click)='showConfirm(groupe.id)'>
<ion-icon color="danger" ios="ios-trash" md="md-trash"></ion-icon>
</button>
</div>

     </ion-list>
</ion-content>
`
})

export class ModalContentPageGroupe {
  character;
  dis = "true";
  groupe = {
    libelle: '',
    specialit: '',
    niveau: '',
    id: ''
  };
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public groupeService: GroupeServiceProvider,
    public alertCtrl: AlertController
  ) {

    this.groupe = this.params.get("groupe");

  }

  edit(id) {
    if (this.dis == "false") {
      if (this.groupe.libelle === '' || this.groupe.specialit === '' || this.groupe.niveau === '' || this.groupe.libelle === undefined || this.groupe.specialit === undefined || this.groupe.niveau === undefined) {
        alert('Vous devez remplir le formulaire correctement');
      } else {
        this.groupeService.editGroupe(this.groupe).then(data => {
        });
      }

      this.dis = "true";
    }
    else {


      this.dis = "false"
    }

  }



  delete(id) {
    this.groupeService.deletteGroupe(id).then(data => {
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
