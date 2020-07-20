import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireDetailComponent } from './inventaire-detail.component';

describe('InventaireDetailComponent', () => {
  let component: InventaireDetailComponent;
  let fixture: ComponentFixture<InventaireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
