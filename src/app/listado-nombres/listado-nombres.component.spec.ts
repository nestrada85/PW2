import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNombresComponent } from './listado-nombres.component';

describe('ListadoNombresComponent', () => {
  let component: ListadoNombresComponent;
  let fixture: ComponentFixture<ListadoNombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
