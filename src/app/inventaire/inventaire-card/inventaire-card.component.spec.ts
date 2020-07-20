import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireCardComponent } from './inventaire-card.component';

describe('InventaireCardComponent', () => {
  let component: InventaireCardComponent;
  let fixture: ComponentFixture<InventaireCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
