import { CreneauxServiceProvider } from './../../providers/creneaux-service/creneaux-service';
import { EnseignantAjoutPage } from './../enseignant-ajout/enseignant-ajout';
import { SalleServiceProvider } from './../../providers/salle-service/salle-service';
import { SeanceServiceProvider } from './../../providers/seance-service/seance-service';
import { GroupeServiceProvider } from './../../providers/groupe-service/groupe-service';
import { EnseignantServiceProvider } from './../../providers/enseignant-service/enseignant-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreneauxAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-creneaux-ajout',
  templateUrl: 'creneaux-ajout.html',
})
export class CreneauxAjoutPage implements OnInit {

  public groupes;
  public seances;
  public salles;
  public enseignants;
  idEnseignant='';
  creneau = {
    idEnseignant: '',
    idGroupe: '',
    idSeance: '',
    idSalle: '',
  };


  constructor(public creneauxService:CreneauxServiceProvider,public salleService:SalleServiceProvider,public seanceService:SeanceServiceProvider , public groupeService : GroupeServiceProvider,public enseignantService: EnseignantServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }


  ajout() {
    // tslint:disable-next-line:one-line
    // tslint:disable-next-line:max-line-length
    if (this.creneau.idEnseignant === '' || this.creneau.idGroupe === '' || this.creneau.idSeance === '' || this.creneau.idSalle === '' || this.creneau.idEnseignant === undefined || this.creneau.idGroupe === undefined || this.creneau.idSeance === undefined || this.creneau.idSalle === undefined) {
    } else {
      this.creneauxService.addCreneau(this.creneau).then(data => {
      });

      window.location.reload();

    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreneauxAjoutPage');
  }

  ngOnInit() {

    this.salleService.getSalles().then(data => {
      this.salles = data;
    });
    this.seanceService.getSeances().then(data => {
      this.seances = data;
    });


    this.groupeService.getGroupes().then(data => {
      this.groupes = data;
    });

        this.enseignantService.getEnseignants().then(data => {
          this.enseignants = data;
        });
    
      }

}
