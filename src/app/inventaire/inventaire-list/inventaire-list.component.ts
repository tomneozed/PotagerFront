import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plante } from 'src/app/Model/Plante';

@Component({
  selector: 'app-inventaire-list',
  templateUrl: './inventaire-list.component.html',
  styleUrls: ['./inventaire-list.component.scss']
})
export class InventaireListComponent implements OnInit {

  @Input() plantes : Plante[];
  @Output() selectedPlante = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPlante(selectedPlante){
    this.selectedPlante.emit(selectedPlante);
  }

}
