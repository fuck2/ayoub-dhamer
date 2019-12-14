import { TestBed } from '@angular/core/testing';

import { CommandePersoAttenteService } from './commande-perso-attente.service';

describe('CommandePersoAttenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandePersoAttenteService = TestBed.get(CommandePersoAttenteService);
    expect(service).toBeTruthy();
  });
});
