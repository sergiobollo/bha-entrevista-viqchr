import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNombreComponent } from './editar-nombre.component';

describe('EditarNombreComponent', () => {
  let component: EditarNombreComponent;
  let fixture: ComponentFixture<EditarNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
