import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoInventarioComponent } from './endereco-inventario.component';

describe('EnderecoInventarioComponent', () => {
  let component: EnderecoInventarioComponent;
  let fixture: ComponentFixture<EnderecoInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
