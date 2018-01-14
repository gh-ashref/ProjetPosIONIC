import { AcceuilProvider } from './../../providers/acceuil/acceuil';
// Angular
import { Component } from '@angular/core';

// Ionic
import { NavController, Events } from "ionic-angular";

// Pages
import { DetailsPage } from "../details/details";

// Side Menu Component
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './../../shared/side-menu-content/models/side-menu-redirect-events';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {


acc = {
	creneau: '',
	ensignant: '',
	groupe: '',
	seance: '',
	salle : ''
  };


	constructor(public acceuilService: AcceuilProvider,private navCtrl: NavController,
				private eventCtrl: Events) { }

	

				ngOnInit() {
					
						this.acceuilService.getAccuille().then(data => {
							this.acc.creneau = data['creneau'];
							this.acc.ensignant = data['ensignant'];
							this.acc.groupe = data['groupe'];
							this.acc.salle = data['salle'];
							this.acc.seance = data['seance'];
						});
					
					  }


}
