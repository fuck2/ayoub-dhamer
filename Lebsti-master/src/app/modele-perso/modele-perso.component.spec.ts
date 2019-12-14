import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelePersoComponent } from './modele-perso.component';

describe('ModelePersoComponent', () => {
  let component: ModelePersoComponent;
  let fixture: ComponentFixture<ModelePersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelePersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
