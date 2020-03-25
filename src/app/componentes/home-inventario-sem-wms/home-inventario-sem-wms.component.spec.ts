import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInventarioSemWmsComponent } from './home-inventario-sem-wms.component';

describe('HomeInventarioSemWmsComponent', () => {
  let component: HomeInventarioSemWmsComponent;
  let fixture: ComponentFixture<HomeInventarioSemWmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInventarioSemWmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInventarioSemWmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
