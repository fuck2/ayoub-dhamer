import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCouterierComponent } from './liste-couterier.component';

describe('ListeCouterierComponent', () => {
  let component: ListeCouterierComponent;
  let fixture: ComponentFixture<ListeCouterierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCouterierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCouterierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
