import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoHomeComponent } from './produto-home.component';

describe('ProdutoHomeComponent', () => {
  let component: ProdutoHomeComponent;
  let fixture: ComponentFixture<ProdutoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
