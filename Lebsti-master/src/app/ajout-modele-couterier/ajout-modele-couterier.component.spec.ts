import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModeleCouterierComponent } from './ajout-modele-couterier.component';

describe('AjoutModeleCouterierComponent', () => {
  let component: AjoutModeleCouterierComponent;
  let fixture: ComponentFixture<AjoutModeleCouterierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutModeleCouterierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModeleCouterierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
