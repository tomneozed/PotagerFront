import { Component, OnInit } from '@angular/core';
import { Plante } from 'src/app/Model/Plante';

@Component({
  selector: 'app-inventaire-global',
  templateUrl: './inventaire-global.component.html',
  styleUrls: ['./inventaire-global.component.scss']
})
export class InventaireGlobalComponent implements OnInit {

  plantes: Plante [];
  selectedPlante: Plante;

  constructor() { }

  ngOnInit(): void {
    this.plantes = [
      new Plante(1, 'Tomate', 'Plantae', 'Tracheobionta', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Solanales', 'Solanaceae', 'Solanum', 'Solanum lycopersicum', 'De Berao', 'assets/images/tomate_berao.jpg'),
      new Plante(2, 'Tomate', 'Plantae', 'Tracheobionta', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Solanales', 'Solanaceae', 'Solanum', 'Solanum lycopersicum', 'Raisin Vert', 'assets/images/raisin_vert.jpg'),
      new Plante(3, 'Tomate', 'Plantae', 'Tracheobionta', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Solanales', 'Solanaceae', 'Solanum', 'Solanum lycopersicum', 'Bosque Blue', 'assets/images/bosque_blue.jpg'),
      new Plante(3, 'Tomate', 'Plantae', 'Tracheobionta', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Solanales', 'Solanaceae', 'Solanum', 'Solanum lycopersicum', 'Gold Dust', 'assets/images/gold_dust.jpg'),
    ]
  }

  selectPlante(plante){
    this.selectedPlante = plante;
  }

}
