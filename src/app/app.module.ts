import { SeanceListPage, ModalContentPageSeance } from './../pages/seance-list/seance-list';
import { SeanceAjoutPage } from './../pages/seance-ajout/seance-ajout';
import { ModalContentPageSalle, SalleListPage } from './../pages/salle-list/salle-list';
import { CreneauxServiceProvider } from './../providers/creneaux-service/creneaux-service';
import { SeanceServiceProvider } from './../providers/seance-service/seance-service';
import { GroupeServiceProvider } from './../providers/groupe-service/groupe-service';
import { SalleServiceProvider } from './../providers/salle-service/salle-service';
import { EnseignantServiceProvider } from './../providers/enseignant-service/enseignant-service';
import { SalleAjoutPage } from './../pages/salle-ajout/salle-ajout';
import { GroupeAjoutPage } from './../pages/groupe-ajout/groupe-ajout';
import { GroupeListPage, ModalContentPageGroupe } from './../pages/groupe-list/groupe-list';
import { CreneauxAjoutPage } from './../pages/creneaux-ajout/creneaux-ajout';
import { EnseignantListPage, ModalContentPage } from './../pages/enseignant-list/enseignant-list';
import { EnseignantAjoutPage } from './../pages/enseignant-ajout/enseignant-ajout';
import { CreneauxListPage } from './../pages/creneaux-list/creneaux-list';
// Angular references
import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// Ionic references
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// App
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';

// Custom components
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { AcceuilProvider } from '../providers/acceuil/acceuil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    CreneauxListPage,
    EnseignantAjoutPage,
    EnseignantListPage,
    GroupeAjoutPage,
    GroupeListPage,
    SalleAjoutPage,
    SalleListPage,
    CreneauxAjoutPage,
    ModalContentPage,
    ModalContentPageGroupe,
    ModalContentPageSalle,
    SeanceAjoutPage,
    SeanceListPage,
    SideMenuContentComponent,
    ModalContentPageSeance
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    CreneauxListPage,
    EnseignantAjoutPage,
    EnseignantListPage,
    GroupeAjoutPage,
    GroupeListPage,
    SalleAjoutPage,
    CreneauxAjoutPage,
    ModalContentPage,
    ModalContentPageGroupe,
    ModalContentPageSalle,
    SalleListPage,
    SeanceAjoutPage,
    SeanceListPage,
    ModalContentPageSeance
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EnseignantServiceProvider,
    GroupeServiceProvider,
    SalleServiceProvider,
    SeanceServiceProvider,
    CreneauxServiceProvider,
    AcceuilProvider
  ]
})
export class AppModule { }
