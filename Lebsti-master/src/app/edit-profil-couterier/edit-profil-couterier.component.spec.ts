import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilCouterierComponent } from './edit-profil-couterier.component';

describe('EditProfilCouterierComponent', () => {
  let component: EditProfilCouterierComponent;
  let fixture: ComponentFixture<EditProfilCouterierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilCouterierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilCouterierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
