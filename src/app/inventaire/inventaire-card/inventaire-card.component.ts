import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plante } from 'src/app/Model/Plante';

@Component({
  selector: 'app-inventaire-card',
  templateUrl: './inventaire-card.component.html',
  styleUrls: ['./inventaire-card.component.scss']
})
export class InventaireCardComponent implements OnInit {

  @Input() plante: Plante;
  @Output() selectedPlante = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPlante(){
    this.selectedPlante.emit(this.plante);
  }

}
