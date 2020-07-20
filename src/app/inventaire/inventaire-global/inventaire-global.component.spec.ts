import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireGlobalComponent } from './inventaire-global.component';

describe('InventaireGlobalComponent', () => {
  let component: InventaireGlobalComponent;
  let fixture: ComponentFixture<InventaireGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
