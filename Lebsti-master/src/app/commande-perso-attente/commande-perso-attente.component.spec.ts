import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePersoAttenteComponent } from './commande-perso-attente.component';

describe('CommandePersoAttenteComponent', () => {
  let component: CommandePersoAttenteComponent;
  let fixture: ComponentFixture<CommandePersoAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandePersoAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandePersoAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
