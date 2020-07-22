import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { InventaireGlobalComponent } from './inventaire/inventaire-global/inventaire-global.component';
import { InventaireDetailComponent } from './inventaire/inventaire-detail/inventaire-detail.component';
import { InventaireListComponent } from './inventaire/inventaire-list/inventaire-list.component';
import { InventaireCardComponent } from './inventaire/inventaire-card/inventaire-card.component';
import { StyleComponent } from './directive/style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    InventaireDetailComponent,
    InventaireListComponent,
    InventaireCardComponent,
    InventaireGlobalComponent,
    StyleComponent
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
