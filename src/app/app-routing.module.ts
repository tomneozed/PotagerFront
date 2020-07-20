import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InventaireGlobalComponent } from './inventaire/inventaire-global/inventaire-global.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'inventaire', component: InventaireGlobalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
