import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireAjouterGraineComponent } from './inventaire-ajouter-graine.component';

describe('InventaireAjouterGraineComponent', () => {
  let component: InventaireAjouterGraineComponent;
  let fixture: ComponentFixture<InventaireAjouterGraineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireAjouterGraineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireAjouterGraineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
