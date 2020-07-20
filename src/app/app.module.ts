import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { InventaireGlobalComponent } from './inventaire/inventaire-global/inventaire-global.component';
import { InventaireAjouterGraineComponent } from './inventaire/inventaire-ajouter-graine/inventaire-ajouter-graine.component';
import { InventaireDetailComponent } from './inventaire/inventaire-detail/inventaire-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InventaireAjouterGraineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'inventaire', component: InventaireGlobalComponent},
      {path: 'inventaire/:graineId', component: InventaireDetailComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
