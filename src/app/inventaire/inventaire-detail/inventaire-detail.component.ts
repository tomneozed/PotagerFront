import { Component, OnInit, Input } from '@angular/core';
import { Plante } from 'src/app/Model/Plante';

@Component({
  selector: 'app-inventaire-detail',
  templateUrl: './inventaire-detail.component.html',
  styleUrls: ['./inventaire-detail.component.scss']
})
export class InventaireDetailComponent implements OnInit {

  @Input() plante: Plante = new Plante();
  constructor() { }

  ngOnInit(): void {
  }

}
